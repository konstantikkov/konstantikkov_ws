import React from 'react'
import styles from './index.css'
import {Images} from "../../../images";

export const BlockMiddle = ({content, image}) =>{
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
            <div className='ImageBlock'>
                <img src={image}/>
            </div>
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
                </div>
            </div>
        </div>)
}