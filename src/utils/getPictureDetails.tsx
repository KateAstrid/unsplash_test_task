import axios from 'axios'

interface PicResponse {
    likes: number
    user: {
        name: string
    }
    location: {
        country: string | null
        title: string
    }
    downloads: number
    urls: {
        full: string
    }
}

const getPictureDetails = (id: string) => {
    return(
        axios({
            method: "get",
            url: `https://api.unsplash.com/photos/${id}`, 
            headers: {
                Accept: "text/plain",
                Authorization: "Client-ID AHdh4i9hoq1Uf90KD6lo1W3UGilTn9_Zs5_JmM_hDFQ",
            },
        })
        .then(response => {
            const pic: PicResponse = response.data
            
            const picInfo = {
                likes: pic.likes,
                location: pic.location.country ?? pic.location.title,
                downloads: pic.downloads,
                user: pic.user.name,
                url: pic.urls.full,
            }
            return picInfo
        })
        .catch(error => {
            console.error(error)
            return null
        })
    )
}

export default getPictureDetails