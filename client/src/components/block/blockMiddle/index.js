import React from 'react'
import styles from './index.css'
import {Images} from "../../../images";
import {NavLink} from "react-router-dom";

export const BlockMiddle = ({content, image}) =>{
    console.log(content)
    return(
        <div className='Block Middle'>
            <div className='TextBlock'>
                <div className='Header'>{content.content[0].header}</div>
                <div className='Text'>
                    {content.content[0].text.map((text)=>{
                        return(text
                        )
                    })}
                </div>
            </div>
            <img className='ImageBlock' src={image[0]}/>
            <img className='ImageAlt' src={image[1]}/>
            <div className='TextBlock'>
                <div className='Header'>{content.content[1].header}</div>
                <div className='Text'>
                    {content.content[1].text.map((text)=>{
                        return(
                            <p>
                                {text}
                            </p>
                        )
                    })}
                    {
                        content.content[1]?.links?<NavLink to={content.content[1]?.links[0]?.href}>{content.content[1]?.links[0]?.text}</NavLink>:''
                    }
                </div>
            </div>
        </div>)
}