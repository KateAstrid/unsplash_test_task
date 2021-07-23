import axios from 'axios'

interface Picture {
    urls: {
        small: string
    }
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
            const data = response.data
            const urls: string[] = []
            data.map((pic: Picture) => urls.push(pic.urls.small))
            return urls
        })
        .catch(error => {
            console.error(error)
            return []
        })
    )
}

export default getPictures