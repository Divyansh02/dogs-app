import React from 'react';
import './index.css';
import {Header} from '../Header';

export const Carousel = (props) => {
    const {data} = props;
    return (
        <>
        <Header header={"Dogs Slideshow"}/>
        <div className="dogs-image">
            {data && data.map((item,index)=>{
                return <img key={index} src={item} alt="random-dogs"/>
            })}
        </div>
        </>
    )
}
