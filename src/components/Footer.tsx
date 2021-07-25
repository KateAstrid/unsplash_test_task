import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons'
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom"

const savePage = (page: string) => localStorage.setItem('page', page)
 
interface Page {
    page: string
    setPage: (page: string) => void
}

const Footer = ({ page, setPage }: Page) => {
    let history = useHistory();

    const handleClick = (path: string) => {
        setPage(path)
        savePage(path)
        history.push(path)
    }

    return (
        <div className="footer">
            <div className="footerSection" onClick={() => handleClick('home')}>
                {page === 'home'
                    ? <FontAwesomeIcon icon={solidUser} />
                    : <FontAwesomeIcon icon={regularUser} />
                }
                <div className="footerText">Home</div>
            </div>
            <div className="footerSection" onClick={() => handleClick('favorites')}>
                {page === 'favorites'
                    ? <FontAwesomeIcon icon={solidHeart} />
                    : <FontAwesomeIcon icon={regularHeart} />
                }
                <div className="footerText">Favorites</div>
            </div>
        </div>
    )
}

export default Footer