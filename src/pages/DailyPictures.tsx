import React, { useEffect, useState } from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import InfiniteScroll from "react-infinite-scroll-component"
import getPictures from "../utils/getPictures"
import searchPictures from "../utils/searchPictures"
import AllColumns from '../components/Columns'
import { PicData } from '../interfaces'

interface Pictures {
    pictures: PicData[]
    setPictures: (images: PicData[]) => void
    showedPictures: string
    text: string
}


const PicsContainer = ({ pictures, setPictures, showedPictures, text }: Pictures) => {
    const [page, setPage] = useState<number>(2)

    const fetchMoreData = () => {
        if (showedPictures === 'dailyPic') {
            getPictures(page).then(response => {
                setPictures([ ...pictures, ...response ])
                setPage(page + 1)
            })
        }
        if (showedPictures === 'searchedPic') {
            searchPictures(page, text).then(response => {
                setPictures([ ...pictures, ...response ])
                setPage(page + 1)
            })
        }
    }

    return (
        <InfiniteScroll
            dataLength={pictures.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        > 
            <AllColumns pictures={pictures} />
        </InfiniteScroll>
    )
}

const DailyPictures = () => {
    const [pictures, setPictures] = useState<PicData[]>([])
    const [text, setText] = useState<string>('')
    const [showedPictures, setShowedPictures] = useState<string>('dailyPic') 

    useEffect(() => {
        if (pictures.length === 0) {
            getPictures(1).then(response => setPictures(response))
        }
    }, [])

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default DailyPictures