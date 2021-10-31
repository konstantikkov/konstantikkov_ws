import React from 'react'
import styles from './index.css'
import {TextBlock} from "../TextBlock";

export const BlockInside = ({content, image}) =>{
    return(
        <div className='Block'>
            <TextBlock
                header={content.content[0].header}
                links={content.content[0].links}
                mode={content.mode}
                text={content.content[0].text}
                inside={image[0]}
            />
        </div>
    )
}