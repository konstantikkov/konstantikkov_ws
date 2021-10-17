import React, {useEffect} from 'react';
import {Block} from "../../components/block";
import styles from './index.css'

import Plx from "react-plx";
import {MediatorHeader} from "../../components/mediatorHeader";
import {Footer} from "../../components/footer";

export const MediatorPage = ({content}) => {
    console.log(content);

    useEffect(()=>{
            window.scroll(0,0)
    }, []);

    const enterAnimation =
        [
            {
                start: '.second',
                duration:'.second',
                properties: [
                    {
                        startValue: 0,
                        endValue: 1,
                        property: "opacity"
                    },
                    {
                        startValue: -200,
                        endValue: 0,
                        property: "translateX"
                    }
                ]
            },
            {
                start: '.third',
                duration:'.third',
                properties: [
                    {
                        startValue: 0.5,
                        endValue: 1,
                        property: "opacity"
                    },
                    {
                        startValue: 0,
                        endValue: 20,
                        property: "translateY"
                    }
                ]
            }
        ]
    return(
        <React.Fragment>
            <div className='Mediator'>
                <div className='Main'>
                    <MediatorHeader/>
                    <Block content={content.screens[0]}/>
                    <Plx className='second' parallaxData={[enterAnimation[0]]}>
                        <Block content={content.screens[1]}/>
                    </Plx>
                    <Plx className='third' parallaxData={[enterAnimation[1]]}>
                        <Block content={content.screens[2]}/>
                    </Plx>
                </div>
                <Footer mode='Mediator'/>
            </div>
        </React.Fragment>
    )
}