import React from 'react';
import {Block} from "../../components/block";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";
import {ImageBlockLarge} from "../../components/imageBlockLarge";
import styles from './index.css'

import Plx from "react-plx";

export const MainPage = ({content}) => {
    console.log(content)

    const enterAnimation =
        [{
            start: '.first',
            duration:'.first',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                },
                {
                    startValue: 200,
                    endValue: 0,
                    property: "translateX"
                }
            ]
        },
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
                        startValue: 0,
                        endValue: 1,
                        property: "opacity"
                    },
                    {
                        startValue: 100,
                        endValue: 0,
                        property: "translateY"
                    }
                ]
            },
            {
                start: '.fourth',
                duration:'.fourth',
                properties: [
                    {
                        startValue: 0,
                        endValue: 1,
                        property: "opacity"
                    },
                    {
                        startValue: 100,
                        endValue: 0,
                        property: "translateX"
                    }
                ]
            }
        ]

    return(
        <React.Fragment>
            <div className='Main'>
                <Header/>
                <ImageBlockLarge/>
                <div className="BlockContent">
                    <Block content={content.screens[2]}/>
                    <Plx className='first' parallaxData={[enterAnimation[0]]}>
                        <Block content={content.screens[3]}/>
                    </Plx>
                    <Plx className='second' parallaxData={[enterAnimation[1]]}>
                        <Block content={content.screens[4]}/>
                    </Plx>
                    <Plx className='third' parallaxData={[enterAnimation[2]]}>
                        <Block content={content.screens[5]}/>
                    </Plx>
                    <Plx className='fourth' parallaxData={[enterAnimation[3]]}>
                        <Block content={content.screens[6]}/>
                    </Plx>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}