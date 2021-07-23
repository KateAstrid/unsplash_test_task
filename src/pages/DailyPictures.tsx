import React, { useEffect, useState } from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import Column from "../components/Column"
import InfiniteScroll from "react-infinite-scroll-component"
import getPictures from "../utils/getPictures"
import searchPictures from "../utils/searchPictures"

interface Pictures {
    pictures: string[]
    setPictures: (images: string[]) => void
    showedPictures: string
    text: string
}

const AllPictures = ({ pictures, setPictures, showedPictures, text }: Pictures) => {
    const [page, setPage] = useState<number>(2)
 
    const zeroLeft: string[] = pictures.filter((pic, index) => index % 3 === 0)
    const oneLeft: string[] = pictures.filter((pic, index) => index % 3 === 1)
    const twoLeft: string[] = pictures.filter((pic, index) => index % 3 === 2)

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
            <div className="allPictures">
                <Column urls={zeroLeft} />
                <Column urls={oneLeft} />
                <Column urls={twoLeft} />
            </div>
        </InfiniteScroll>
    )
}

const DailyPictures = () => {
    const [pictures, setPictures] = useState<string[]>([])
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
                ? <AllPictures 
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