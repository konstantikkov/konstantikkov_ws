import React from 'react'
import styles from './index.css'
import {NavLink} from "react-router-dom";
import {TextBlock} from "../TextBlock";

export const BlockLeft = ({content, image, illustration}) =>{
    console.log(image[0])
    return(
        <div className='Block'>
            {image[0]&&<img className='ImageBlock' src={image[0]}/>}
            <div className="Illustration">{illustration}</div>
            <TextBlock
                header={content.content[0].header}
                links={content.content[0].links}
                mode={content.mode}
                text={content.content[0].text}
            />
            {image[1] && <img className='ImageAlt' src={image[1]}/>}
        </div>
    )
}