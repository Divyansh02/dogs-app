import React from 'react';
import './index.css';
import {Header} from '../Header';
import {List} from '../common/List';
import { useHistory } from "react-router-dom";

interface BreedListProps{
    breedList:any;
}

export const BreedList = (props:BreedListProps):React.ReactElement => {
    let history:any = useHistory();
    const {breedList}= props;
    const list:any= breedList ? Object.keys(breedList) : [];

    const goToBreedDetails =(item:string):void=>{
        history.push("/breedDetails",item)
        
    }
    return (
        <div className="breed-list">
            <List list={list} onClick={goToBreedDetails} header="Breed List"/>
        </div>
    )
}
