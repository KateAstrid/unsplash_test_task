import axios from 'axios'
import { PicData } from '../interfaces'
interface PicResponse {
    urls: {
        small: string
    }
    id: string
}


const searchPictures = (page: number, text: string) => {
    return(
        axios({
            method: "get",
            url: `https://api.unsplash.com/search/photos?page=${page}&query=${text}`, 
            headers: {
                Accept: "text/plain",
                Authorization: "Client-ID AHdh4i9hoq1Uf90KD6lo1W3UGilTn9_Zs5_JmM_hDFQ",
            },
        })
        .then(response => {
            const data: PicData[] = []
            response.data.results.forEach((pic: PicResponse) => {
                const picData = {
                    url: pic.urls.small,
                    id: pic.id,
                }
                data.push(picData)
            })
            return data

        })
        .catch(error => {
            console.error(error)
            return []
        })
    )
}

export default searchPictures