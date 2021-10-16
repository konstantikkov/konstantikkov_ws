import React from 'react'
import styles from './index.css'
import {NavLink} from "react-router-dom";

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
                    {
                        content.content[0]?.links?<NavLink to={content.content[0]?.links[0]?.href}>{content.content[0]?.links[0]?.text}</NavLink>:''
                    }
                </div>
            </div>
            {image[1] && <img className='ImageAlt' src={image[1]}/>}
        </div>
    )
}