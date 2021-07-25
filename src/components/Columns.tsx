import OneColumn from "./OneColumn"
import { PicData, ArrayPicData } from '../interfaces'

const Columns = ({ pictures }: ArrayPicData) => {
    const zeroLeft: PicData[] = pictures.filter((pic, index) => index % 3 === 0)
    const oneLeft: PicData[] = pictures.filter((pic, index) => index % 3 === 1)
    const twoLeft: PicData[] = pictures.filter((pic, index) => index % 3 === 2)

    return (
        <div className="allPictures">
            <OneColumn pictures={zeroLeft} />
            <OneColumn pictures={oneLeft} />
            <OneColumn pictures={twoLeft} />
        </div>
    )
}

export default Columns