import Picture from "./Picture"

interface Urls {
    urls: string[]
}

const Column = ({ urls }: Urls) => {
    return (
        <div className="column">
            {urls.map((url, index) => {
                return (
                    <Picture url={url} key={index} />
                )
            })}
        </div>
    )
}

export default Column