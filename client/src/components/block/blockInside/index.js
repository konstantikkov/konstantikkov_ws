import React from 'react'
import styles from './index.css'
import {NavLink} from "react-router-dom";

export const BlockInside = ({content, image}) =>{
    return(
        <div className='Block'>
            <div className='TextBlock  Inside'>
                <div>
                    <div className='Header'>{content.content[0].header}</div>
                    <div className='Text'>
                        {content.content[0].text.map((text)=>{
                            return(text
                            )
                        })}
                        {
                            content.content[0]?.links?<NavLink to={content.content[0]?.links[0]?.href}>{content.content[0]?.links[0]?.text}</NavLink>:''
                        }
                    </div>
                </div>
                    <img className='ImageInside' src={image[0]}/>
            </div>
        </div>
    )
}