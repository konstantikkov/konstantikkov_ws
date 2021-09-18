import React from 'react'
import {Images} from '../../images'
import './index.css'

export const Header = () =>{
    return(
            <div className='HeaderBlock'>
                <ul>
                    <li><img src={Images['telegram.svg']}/><div>@konstantikkov</div></li>
                    <li><img src={Images['mail.svg']}/><div>konstantinovn2001@gmail.com</div></li>
                    <li><img src={Images['discord.svg']}/><div>konstantikkov#7619</div></li>
                </ul>
                <div>
                    <div className='Header'>konstantikkov</div>
                    <span>personal website</span>
                </div>
            </div>
    )
}