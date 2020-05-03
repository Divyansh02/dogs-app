import React from 'react';
import './index.css';
import {Header} from '../Header';
import { useHistory } from "react-router-dom";


export const BreedList = (props) => {
    let history = useHistory();
    const {breedList}= props;
    const list= breedList ? Object.keys(breedList) : [];

    const goToBreedDetails =(item)=>{
        console.log("item*****",item)
        history.push("/breedDetails",item)
        
    }
    return (
        <div className="breed-list">
            <Header header="Breed List"/>
            <ul className="list-ul">
                {list.slice(0,20).map(item =>{
                   return <li className="list-li" onClick={goToBreedDetails.bind(this, item)}>{item}</li>
                })}
            </ul>
        </div>
    )
}
