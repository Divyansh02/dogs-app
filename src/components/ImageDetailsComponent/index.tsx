import React from "react";
import './index.css';

interface ImageDetailsProps{
  breedImages:Array<string>;
}

export const Details = (props:ImageDetailsProps):React.ReactElement => {
    const {breedImages}=props;
  return (
    <div className="specific-breed">
      {breedImages && breedImages.slice(0,10).map(image=>{
         return <img src={image} alt="specific-breed"/>
      })}
    </div>
  );
};
