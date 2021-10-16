import React from 'react'
import './index.css'

export const Footer = ({mode}) =>{

    return(
        <div className={`Footer ${mode ?'MediatorCustom':''}`}>
            <div>Made by konstantikkov</div>
        </div>
    )
}