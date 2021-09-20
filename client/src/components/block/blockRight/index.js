import React from 'react'
import styles from './index.css'

export const BlockRight = ({content, image}) =>{
    return(
        <div className='Block'>
            <div className='TextBlock'>
                <div className='Header'>{content.content[0].header}</div>
                <div className='Text'>
                    {content.content[0].text.map((text)=>{
                        return(text
                        )
                    })}
                </div>
            </div>
            <img className='ImageBlock' src={image}/>
        </div>)
}