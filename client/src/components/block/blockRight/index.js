import React from 'react'
import styles from './index.css'
import {NavLink} from "react-router-dom";
import {TextBlock} from "../TextBlock";

export const BlockRight = ({content, image, illustration}) =>
    <div className='Block'>
        <TextBlock
            header={content.content[0].header}
            links={content.content[0].links}
            mode={content.mode}
            text={content.content[0].text}
        />
        <div className="Illustration">{illustration}</div>
        <img className='ImageBlock' src={image[0]}/>
        <img className='ImageAlt' src={image[1]}/>
    </div>