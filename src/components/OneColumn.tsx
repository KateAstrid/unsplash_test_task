import Picture from "./Picture"
import { PicData, ArrayPicData } from '../utils/interfaces'


const OneColumn = ({ pictures }: ArrayPicData) => {
    return (
        <div className="one-column">
            {pictures.map((picture: PicData, index: number) => {
                return (
                    <Picture picture={picture} key={index} />
                )
            })}
        </div>
    )
}

export default OneColumn