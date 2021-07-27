import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import searchPictures from '../utils/searchPictures'
import { PicData } from '../utils/interfaces'

interface Input {
    setPictures: (pics: PicData[]) => void
    setShowedPictures: (pics: string) => void
    text: string
    setText: (text: string) => void
}

const InputSearch = ({ setPictures, setShowedPictures, text, setText }: Input) => {

    const handleSearch = () => {
        if (text.trim().length !== 0) {
            searchPictures(1, text).then(response => setPictures(response))
            setShowedPictures('searchedPic')
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className="search">
            <input 
                className="search__input" 
                placeholder="Search Pictures" 
                value={text} 
                onChange={(event) => setText(event.target.value)}
                onKeyDown={(event) => handleKeyDown(event)}
            />
            <FontAwesomeIcon className="search__icon" icon={faSearch} onClick={() => handleSearch()} />
        </div>
    )
}

export default InputSearch