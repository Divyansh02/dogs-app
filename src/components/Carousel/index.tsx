import React from 'react';
import './index.css';
import {Header} from '../Header';

interface CarouselProps {
    data:Array<string>;
}

export const Carousel = (props:CarouselProps):React.ReactElement => {
    const {data} = props;
    return (
        <>
        <Header header={"Dogs Slideshow"}/>
        <div className="dogs-image">
            {data && data.map((item:string,index:number) =>{
                return <img key={index} src={item} alt="random-dogs"/>
            })}
        </div>
        </>
    )
}
