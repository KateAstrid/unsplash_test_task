import axios from 'axios'
import { PicData } from './interfaces'

interface PicResponse {
    urls: {
        small: string
    }
    id: string
}

const getPictures = (page: number) => {
    return(
        axios({
            method: "get",
            url: `https://api.unsplash.com/photos?page=${page}`, 
            headers: {
                Accept: "text/plain",
                Authorization: "Client-ID AHdh4i9hoq1Uf90KD6lo1W3UGilTn9_Zs5_JmM_hDFQ",
            },
        })
        .then(response => {
            const data: PicData[] = []
            response.data.forEach((pic: PicResponse) => {
                const picInfo = {
                    url: pic.urls.small,
                    id: pic.id,
                }
                data.push(picInfo)
            })
            return data
        })
        .catch(error => {
            console.error(error)
            return []
        })
    )
}

export default getPictures