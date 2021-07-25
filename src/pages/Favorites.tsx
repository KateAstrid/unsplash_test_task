import React, { useState } from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import InfiniteScroll from "react-infinite-scroll-component"
import searchPictures from "../utils/searchPictures"
import { getFavorites } from '../utils/goToFavorites'
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
        if (showedPictures === 'searchedPic') {
            searchPictures(page, text).then(response => {
                setPictures([ ...pictures, ...response ])
                setPage(page + 1)
            })
        }
    }

    return (
        <React.Fragment>
            {showedPictures === 'searchedPic'
                ? <InfiniteScroll
                    dataLength={pictures.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                > 
                    <AllColumns pictures={pictures} />
                </InfiniteScroll>

                : <AllColumns pictures={pictures} />
            }
        </React.Fragment>
    )
}

const Favorites = () => {
    const [pictures, setPictures] = useState<PicData[]>(getFavorites())
    const [text, setText] = useState<string>('')
    const [showedPictures, setShowedPictures] = useState<string>('favorites') 

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Favorites