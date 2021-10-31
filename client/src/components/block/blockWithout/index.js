import React from 'react'
import styles from './index.css'
import {TextBlock} from "../TextBlock";

export const BlockWithout = ({content}) =>{
    return(
        <div className='Block'>
            <TextBlock
                header={content.content[0].header}
                links={content.content[0].links}
                mode={content.mode}
                text={content.content[0].text}
            />
        </div>
    )
}