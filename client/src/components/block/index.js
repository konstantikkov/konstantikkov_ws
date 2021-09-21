import React from 'react'
import {Images} from '../../images'
import  './index.css'
import {BlockWithout} from "./blockWithout";
import {BlockLeft} from "./blockLeft";
import {BlockRight} from "./blockRight";
import {BlockMiddle} from "./blockMiddle";
import {BlockInside} from "./blockInside";

export const Block = ({content}) => {
    console.log(content.images)
    switch(content.type){
        case "block without":
            return(<BlockWithout content={content}/>);
        case "block left":
            return(<BlockLeft content={content} illustration={content.illustration} image={[Images[content.images[0]], Images[content.images[1]]]}/>);
        case "block right":
            return(<BlockRight content={content} image={[Images[content.images[0]], Images[content.images[1]]]}/>);
        case "block middle":
            return(<BlockMiddle content={content} image={[Images[content.images[0]], Images[content.images[1]]]}/>);
        case "block inside":
            return(<BlockInside content={content} image={[Images[content.images[0]], Images[content.images[1]]]}/>);
    }
}