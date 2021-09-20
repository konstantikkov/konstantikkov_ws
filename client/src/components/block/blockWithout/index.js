import React from 'react'
import styles from './index.css'

export const BlockWithout = ({content}) =>{
    return(
        <div className='Block'>
            <div className='TextBlock'>
                <div className='Header'>{content.content[0].header}</div>
                <div className='Text'>
                    {content.content[0].text.map((text)=>{
                        return(
                            text
                        )
                    })}
                </div>
            </div>
        </div>
    )
}