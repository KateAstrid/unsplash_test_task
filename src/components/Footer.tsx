import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons'
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Page {
    page: string
    setPage: (page: string) => void
}

const Footer = ({ page, setPage }: Page) => {
    return (
        <div className="footer">
            <div className="footerSection" onClick={() => setPage('Home')}>
                {page === 'Home'
                    ? <FontAwesomeIcon icon={solidUser} />
                    : <FontAwesomeIcon icon={regularUser} />
                }
                <div className="footerText">Home</div>
            </div>
            <div className="footerSection" onClick={() => setPage('Favorites')}>
                {page === 'Favorites'
                    ? <FontAwesomeIcon icon={solidHeart} />
                    : <FontAwesomeIcon icon={regularHeart} />
                }
                <div className="footerText">Favorites</div>
            </div>
        </div>
    )
}

export default Footer