import React from 'react'
import styles from './index.css'
import {NavLink} from "react-router-dom";

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
                    {
                        content.content[0]?.links? !content.content[0]?.links[0]?.out ?
                            <NavLink to={content.content[0]?.links[0]?.href}>{content.content[0]?.links[0]?.text}</NavLink>:<a href={content.content[0]?.links[0]?.href}>{content.content[0]?.links[0]?.text}</a>:''
                    }
                </div>
            </div>
            <div className="Illustration">{illustration}</div>
            <img className='ImageBlock' src={image[0]}/>
            <img className='ImageAlt' src={image[1]}/>
        </div>)
}