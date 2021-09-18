import React from 'react'
import {Images} from '../../images'
import styles from './index.css'
export const ImageBlockLarge = () => {
    return(
        <div className='Plate'>
            <img className='balloon _bal1' src={Images['balloon_1.svg']}/>
            <img className='balloon _bal2' src={Images['balloon_1.svg']}/>
            <img className='balloon _bal3' src={Images['balloon_2.svg']}/>
            <img className='balloon _bal4' src={Images['balloon_2.svg']}/>
            <img className='balloon _bal5' src={Images['balloon_1.svg']}/>
            <img className='balloon _bal6' src={Images['balloon_2.svg']}/>
            <img className='Saoirse' src={Images['saoirse_happy.svg']} />
        </div>
    )
}