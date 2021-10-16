import React from 'react'
import svg from '../../images/mediator/tree_couple_full.svg'
import styles from './index.css'
export const MediatorHeader = () => {
    return(
        <div className='MediatorComposition'>
            <object className='Tree' type = "image/svg+xml" data = {svg}></object>
            <div className='Info'>
                <div className='MediatorName'>
                    Mediator
                </div>
                <div className='MediatorBlock MediatorCustom'>
                    <ul>
                        <li>Work together</li>
                        <li>Play together</li>
                        <li>Be together</li>
                    </ul>
                </div>
                <a href='#'>
                    <div className='MediatorButton'>
                        <span>
                            Check this out!
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}