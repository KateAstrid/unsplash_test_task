import axios from 'axios'

interface Image {
    urls: {
        small: string
    }
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
            const data = response.data.results
            const urls: string[] = []
            data.map((image: Image) => urls.push(image.urls.small))
            return urls
        })
        .catch(error => {
            console.error(error)
            return []
        })
    )
}

export default searchPictures