import React from 'react';
import styles from './index.css'
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";
import {Block} from "../../components/block";

export const TaskPage = ({content}) => {

    return(
        <React.Fragment>
            <div className='Main'>
                <div className="Content">
                    <Header/>
                    <Block content={content.screens[1]}/>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
