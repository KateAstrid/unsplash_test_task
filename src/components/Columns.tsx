import OneColumn from "./OneColumn"
import { PicData, ArrayPicData } from '../utils/interfaces'
import useCurrentWidth from '../utils/useCurrentWidth'

const Columns = ({ pictures }: ArrayPicData) => {
    const width = useCurrentWidth()
    const columns = width >= 600
        ? 3 
        : width >= 300 
            ? 2
            : 1 

    let zeroLeft: PicData[] = []
    let oneLeft: PicData[] = []
    let twoLeft: PicData[] = []

    if (columns === 1) {
        zeroLeft = pictures
    }

    if (columns === 2) {
        zeroLeft = pictures.filter((pic, index) => index % 3 === 0)
        oneLeft = pictures.filter((pic, index) => index % 3 === 1)
    }

    if (columns === 3) {
        zeroLeft = pictures.filter((pic, index) => index % 3 === 0)
        oneLeft = pictures.filter((pic, index) => index % 3 === 1)
        twoLeft = pictures.filter((pic, index) => index % 3 === 2)
    }
    
    return (
        <div className="page__columns">
            <OneColumn pictures={zeroLeft} />
            {columns === 2 || columns === 3
                ? <OneColumn pictures={oneLeft} />
                : ''
            }
            {columns === 3 
                ? <OneColumn pictures={twoLeft} />
                : ''
            }
        </div>
    )
}

export default Columns