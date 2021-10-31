import React from 'react'
import styles from './index.css'
import {NavLink} from "react-router-dom";
import {TextBlock} from "../TextBlock";

export const BlockBigPicture = ({content, image, illustration}) =>{
    return(
        <div className='Block BigPicture'>
            {image[0]&&<img className='BigPictureImage' src={image[0]}/>}
            <TextBlock
                header={content.content[0].header}
                links={content.content[0].links}
                mode={content.mode}
                text={content.content[0].text}
            />
        </div>
    )
}