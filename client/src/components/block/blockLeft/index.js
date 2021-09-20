import React from 'react'
import styles from './index.css'

export const BlockLeft = ({content, image}) =>{
    return(
        <div className='Block'>
            <img className='ImageBlock' src={image}/>
            <div className='TextBlock'>
                <div className='Header'>{content.content[0].header}</div>
                <div className='Text'>
                    {content.content[0].text.map((text)=>{
                        return(text)
                    })}
                </div>
            </div>
        </div>
    )
}