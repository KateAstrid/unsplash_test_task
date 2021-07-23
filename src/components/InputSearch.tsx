import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import searchPictures from '../utils/searchPictures'

interface Input {
    setPictures: (images: string[]) => void
    setShowedPictures: (pics: string) => void
    text: string
    setText: (text: string) => void
}

const InputSearch = ({ setPictures, setShowedPictures, text, setText }: Input) => {

    const handleSearch = () => {
        searchPictures(1, text).then(response => setPictures(response))
        setShowedPictures('searchedPic')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            searchPictures(1, text).then(response => setPictures(response))
            setShowedPictures('searchedPic')
        }
    }

    return (
        <div className="inputContainer">
            <input 
                className="input" 
                placeholder="Search Pictures" 
                value={text} 
                onChange={(event) => setText(event.target.value)}
                onKeyDown={(event) => handleKeyDown(event)}
            />
            <FontAwesomeIcon className="iconSearch" icon={faSearch} onClick={() => handleSearch()} />
        </div>
    )
}

export default InputSearch