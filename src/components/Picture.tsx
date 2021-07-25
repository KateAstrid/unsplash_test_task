import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { goToFavorites, getFavorites } from '../utils/goToFavorites'
import { PicData } from '../interfaces'

interface Icon {
    like: boolean
    onClick: () => void
}
interface Picture {
    picture: PicData
}

const isLike = (picture: PicData) => { 
    const favorites = getFavorites()
    return favorites.filter(pic => pic.id === picture.id).length > 0
}

const IconHeart = ({ like, onClick }: Icon) => {
    return (
        <div className="iconContainer" onClick={onClick}>
            {like
                ? <FontAwesomeIcon className="iconHeart" icon={solidHeart} />
                : <FontAwesomeIcon className="iconHeart" icon={regularHeart} />
            }
        </div>
    )
}

const Picture = ({ picture }: Picture) => {
    const [like, setLike] = useState(isLike(picture))

    const handleClick = () => {
        setLike(!like)
        goToFavorites(picture, like)
    }

    return (
        <div className="pictureContainer">
            <img src={picture.url} alt="here is the pic" className="picture" />
            <IconHeart like={like} onClick={handleClick}/>
        </div>
    )
}

export default Picture