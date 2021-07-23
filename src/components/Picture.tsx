import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import goToFavorites from '../utils/goToFavorites'

interface Url {
    url: string
}

interface Icon {
    like: boolean
    onClick: () => void
}

const IconHeart = ({ like, onClick }: Icon) => {
    return (
        <div className="iconContainer" onClick={onClick}>
            {like
                ? <FontAwesomeIcon className="iconHeart" icon={regularHeart} />
                : <FontAwesomeIcon className="iconHeart" icon={solidHeart} />
            }
        </div>
    )
}

const Picture = ({ url }: Url) => {
    const [like, setLike] = useState(true)

    const handleClick = () => {
        setLike(!like)
        goToFavorites(url, like)
    }

    return (
        <div className="pictureContainer">
            <img src={url} alt="here is the pic" className="picture" />
            <IconHeart like={like} onClick={handleClick}/>
        </div>
    )
}

export default Picture