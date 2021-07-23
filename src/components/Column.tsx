import Image from "./Image"

interface Urls {
    urls: string[]
}

const Column = ({ urls }: Urls) => {
    return (
        <div className="column">
            {urls.map((url, index) => {
                return (
                    <Image url={url} key={index} />
                )
            })}
        </div>
    )
}

export default Column