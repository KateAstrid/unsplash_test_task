import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons'
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory, useLocation } from "react-router-dom"
 
const Footer = () => {
    let history = useHistory()
    let location = useLocation().pathname.substring(1) ?? 'home'

    const handleClick = (path: string) => history.push(path) 

    return (
        <div className="footer">
            <div className="footer__section" onClick={() => handleClick('/home')}>
                {location === 'home'
                    ? <FontAwesomeIcon icon={solidUser} className="footer__icon" />
                    : <FontAwesomeIcon icon={regularUser} className="footer__icon" />
                }
                <div className="footer__text">Home</div>
            </div>
            <div className="footer__section" onClick={() => handleClick('/favorites')}>
                {location === 'favorites'
                    ? <FontAwesomeIcon icon={solidHeart} className="footer__icon" />
                    : <FontAwesomeIcon icon={regularHeart} className="footer__icon" />
                }
                <div className="footer__text">Favorites</div>
            </div>
        </div>
    )
}

export default Footer