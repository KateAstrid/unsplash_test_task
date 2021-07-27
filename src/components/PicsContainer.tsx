import { PicData } from '../utils/interfaces'
import React, { useState } from 'react'
import Columns from '../components/Columns'
import getPictures from '../utils/getPictures'
import searchPictures from '../utils/searchPictures'
import InfiniteScroll from "react-infinite-scroll-component"

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
        <React.Fragment>
            {showedPictures === 'searchedPic' || showedPictures === 'dailyPic'
                ? <InfiniteScroll
                    dataLength={pictures.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                > 
                    <Columns pictures={pictures} />
                </InfiniteScroll>

                : <Columns pictures={pictures} />
            }
        </React.Fragment>
    )
}




export default PicsContainer
