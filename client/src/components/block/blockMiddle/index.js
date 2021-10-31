import React from 'react'
import styles from './index.css'
import {TextBlock} from "../TextBlock";

export const BlockMiddle = ({content, image}) =>
    <div className='Block Middle'>
            <TextBlock
                header={content.content[0].header}
                links={content.content[0].links}
                mode={content.mode}
                text={content.content[0].text}
            />
            <img className='ImageBlock' src={image[0]}/>
            <img className='ImageAlt' src={image[1]}/>
            <TextBlock
                header={content.content[1].header}
                links={content.content[1].links}
                mode={content.mode}
                text={content.content[1].text}
            />
    </div>