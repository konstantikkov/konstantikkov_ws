import React from 'react'
import styles from './index.css'

export const BlockLeft = ({content, image, illustration}) =>{
    console.log(image[0])
    return(
        <div className='Block'>
            {image[0]&&<img className='ImageBlock' src={image[0]}/>}
            <div className="Illustration">{illustration}</div>
            <div className='TextBlock'>
                <div className='Header'>{content.content[0].header}</div>
                <div className='Text'>
                    {content.content[0].text.map((text)=>{
                        return(text)
                    })}
                </div>
            </div>
            {image[1] && <img className='ImageAlt' src={image[1]}/>}
        </div>
    )
}