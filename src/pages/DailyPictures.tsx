import { useEffect, useState } from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import getPictures from "../utils/getPictures"
import { PicData } from '../utils/interfaces'
import PicsContainer from "../components/PicsContainer"

const DailyPictures = () => {
    const [pictures, setPictures] = useState<PicData[]>([])
    const [text, setText] = useState<string>('')
    const [showedPictures, setShowedPictures] = useState<string>('dailyPic') 

    useEffect(() => {
        if (pictures.length === 0) {
            getPictures(1).then(response => setPictures(response))
        }
    })

    return (
        <div className="page">
            <InputSearch 
                setPictures={setPictures} 
                setShowedPictures={setShowedPictures} 
                text={text}
                setText={setText}
            />
            <PageTitle title={showedPictures === 'searchedPic' ? "Search" : "Daily Pictures"}/>
            {pictures.length > 0 
                ? <PicsContainer 
                    pictures={pictures} 
                    setPictures={setPictures} 
                    showedPictures={showedPictures} 
                    text={text} 
                /> 
                : ''
            }
        </div>
    )
}

export default DailyPictures