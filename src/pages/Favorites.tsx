import { useState } from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import { getFavorites } from '../utils/goToFavorites'
import { PicData } from '../utils/interfaces'
import PicsContainer from "../components/PicsContainer"

const Favorites = () => {
    const [pictures, setPictures] = useState<PicData[]>(getFavorites())
    const [text, setText] = useState<string>('')
    const [showedPictures, setShowedPictures] = useState<string>('favorites') 

    return (
        <div className="page">
            <InputSearch 
                setPictures={setPictures} 
                setShowedPictures={setShowedPictures} 
                text={text}
                setText={setText}
            />
            <PageTitle title={showedPictures === 'searchedPic' ? "Search" : "Favorites"}/>
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

export default Favorites