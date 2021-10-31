import React from 'react'
import {Link} from "./Link";


export const TextBlock = ({header, text, links, mode, inside}) => {
    return(
        <div className={`TextBlock ${mode ?'MediatorCustom':''} ${inside?'Inside':''} `}>
        <div className='Header'>{header}</div>
        <div className='Text'>
            {text.map((text)=>{
                return(
                    <p>
                        {text}
                    </p>
                )
            })}
            {
                links&&links.map((link)=> <Link link={link}/>)
            }
        </div>
            {
                inside&&<img src={inside} />
            }
    </div>)
}