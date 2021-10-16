import React from 'react'
import styles from './index.css'

export const BlockRight = ({content, image, illustration}) =>{
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
            <div className="Illustration">{illustration}</div>
            <img className='ImageBlock' src={image[0]}/>
            <img className='ImageAlt' src={image[1]}/>
        </div>)
}