import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import getPictureDetails from '../utils/getPictureDetails'
import BarLoader from "react-spinners/BarLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface PicData {
    url: string
    user: string
    location: string
    likes: number
    downloads: number
}

interface Props {
    prop: number | string | undefined
    title: string
}

const InfoPart = ({ prop, title }: Props) => {
    return (
        <div className="details__info--part">
            <div className="details__info--title">{title}</div>
            <div className="details__info--value">{prop ?? '-'}</div>
        </div>
    )
}

const Details = () => {
    const [picData, setPicData] = useState<PicData | null>(null)
    let history = useHistory()
    const id = history.location.pathname.substring(9)

    useEffect(() => {
        getPictureDetails(id).then(response => setPicData(response))
    })

    const handleClick = () => {
        history.goBack()
    }

    return (
        <div className="page details">
            {picData 
                ? <React.Fragment>
                    <img src={picData.url} alt="here is a pic" className="details__image"/>
                    <FontAwesomeIcon icon={faArrowLeft} className="details__icon" onClick={handleClick} />
                    <div className="details__info">
                        <div className="details__info--two-part">
                            <InfoPart title="Downloads" prop={picData.downloads} />
                            <InfoPart title="User" prop={picData.user} />
                        </div>
                        <div className="details__info--two-part">
                            <InfoPart title="Location" prop={picData.location} />
                            <InfoPart title="Likes" prop={picData.likes} />
                        </div>
                    </div>
                </React.Fragment>
                : <BarLoader width={1000} color="gray"/>
            }
        </div>
    )
}


export default Details