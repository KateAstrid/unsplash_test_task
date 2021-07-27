import { useState, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { goToFavorites, getFavorites } from '../utils/goToFavorites'
import { PicData } from '../utils/interfaces'
import { useHistory } from "react-router-dom"

interface Icon {
    like: boolean
    onClick: (event: MouseEvent<HTMLDivElement> ) => void
}
interface Pic {
    picture: PicData
}

const isLike = (picture: PicData) => { 
    const favorites = getFavorites()
    return favorites.filter(pic => pic.id === picture.id).length > 0
}

const IconHeart = ({ like, onClick }: Icon) => {
    return (
        <div className="one-picture__icon" onClick={(event: MouseEvent<HTMLDivElement>) => onClick(event)}>
            {like
                ? <FontAwesomeIcon className="one-picture__icon--heart" icon={solidHeart} />
                : <FontAwesomeIcon className="one-picture__icon--heart" icon={regularHeart} />
            }
        </div>
    )
}

const Picture = ({ picture }: Pic) => {
    const [like, setLike] = useState(isLike(picture))
    let history = useHistory()

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setLike(!like)
        goToFavorites(picture, like)
    }

    const goToDetails = () => {
        history.push(`/details/${picture.id}`)
    }

    return (
        <div className="one-picture" onClick={() => goToDetails()}>
            <img src={picture.url} alt="here is the pic" className="one-picture__image" />
            <IconHeart like={like} onClick={(event: MouseEvent<HTMLDivElement>) => handleClick(event)}/>
        </div>
    )
}

export default Picture 