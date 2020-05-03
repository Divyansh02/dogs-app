import React from "react";
import './index.css';
import {Header} from '../Header';

export const Details = (props) => {
    const {specificBreedImages}=props;
  return (
    <div className="specific-breed">
      {specificBreedImages && specificBreedImages.slice(0,10).map(image=>{
         return <img src={image} alt="specific-breed"/>
      })}
    </div>
  );
};
