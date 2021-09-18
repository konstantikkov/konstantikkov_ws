import React from 'react';
import {Block} from "../../components/block";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";

export const MainPage = ({content}) => {
    console.log(content)
    return(
        <React.Fragment>
            <div className='Main'>
                <Header/>
                <Block content={content.screens[2]}/>
                <Block content={content.screens[3]}/>
                <Block content={content.screens[4]}/>
                <Block content={content.screens[5]}/>
                <Block content={content.screens[6]}/>
                <Footer/>
            </div>
        </React.Fragment>
    )
}