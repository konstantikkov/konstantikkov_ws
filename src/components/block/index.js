import React from 'react'
import {Images} from '../../images'
import  './index.css'

export const Block = ({content}) => {
    console.log(content)
    switch(content.type){
        case "block without":
            return(
                <div className='Block'>
                    <div className='TextBlock'>
                        <div className='Header'>{content.content[0].header}</div>
                        <div className='Text'>
                            {content.content[0].text.map((text)=>{
                                return(
                                        text
                                )
                            })}
                        </div>
                    </div>
                </div>);
        case "block left":
            return(
                <div className='Block'>
                    <div className='ImageBlock'>
                        <img src={Images[content.images[0]]}/>
                    </div>
                    <div className='TextBlock'>
                        <div className='Header'>{content.content[0].header}</div>
                        <div className='Text'>
                            {content.content[0].text.map((text)=>{
                                return(text
                                )
                            })}
                        </div>
                    </div>
                </div>);
        case "block right":
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
                        <img src={Images[content.images[0]]}/>
                    </div>
                </div>);
        case "block middle":
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
                        <img src={Images[content.images[0]]}/>
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
                </div>);
        case "block inside":
            return(
                <div className='Block'>
                    <div className='TextBlock  Without'>
                        <div>
                            <div className='Header'>{content.content[0].header}</div>
                            <div className='Text'>
                                {content.content[0].text.map((text)=>{
                                    return(text
                                    )
                                })}
                            </div>
                        </div>
                        <img src={Images[content.images[0]]}/>
                    </div>
                </div>);
    }
}