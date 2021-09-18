import React from 'react';
import {Block} from "../../components/block";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";
import {ImageBlockLarge} from "../../components/imageBlockLarge";
import styles from './index.css'

export const MainPage = ({content}) => {
    console.log(content)
    return(
        <React.Fragment>
            <div className='Main'>
                <Header/>
                <ImageBlockLarge/>
                <div className="BlockContent">
                    <Block content={content.screens[2]}/>
                    <Block content={content.screens[3]}/>
                    <Block content={content.screens[4]}/>
                    <Block content={content.screens[5]}/>
                    <Block content={content.screens[6]}/>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}