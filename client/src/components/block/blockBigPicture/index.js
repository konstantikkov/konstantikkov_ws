import React from 'react'
import styles from './index.css'
import {NavLink} from "react-router-dom";

export const BlockBigPicture = ({content, image, illustration}) =>{
    console.log(image[0])
    return(
        <div className='Block BigPicture'>
            {image[0]&&<img className='BigPictureImage' src={image[0]}/>}
            <div className={`TextBlock ${content?.mode ?'MediatorCustom':''}`}>
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
        </div>
    )
}