import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

interface Url {
    url: string
}

const Icon = () => {
    const [like, setLike] = useState(false)
    return (
        <div className="iconContainer" onClick={() => setLike(!like)}>
            {like
                ? <FontAwesomeIcon className="iconHeart" icon={solidHeart} />
                : <FontAwesomeIcon className="iconHeart" icon={regularHeart} />
            }
        </div>
    )
}

const Image = ({ url }: Url) => {
    return (
        <div className="imageContainer">
            <img src={url} alt="here is the pic" className="image" />
            <Icon />
        </div>
    )
}

export default Image