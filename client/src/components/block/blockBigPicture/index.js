import React from 'react'
import styles from './index.css'

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
                </div>
            </div>
        </div>
    )
}