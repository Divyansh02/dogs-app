import React from 'react';
import './index.css';
import {Header} from '../../Header';

interface ListProps{
    list:Array<string>;
    onClick: (item:string) => void;
    header:string;
    style?:{}
}

export const List = (props:ListProps) :React.ReactElement=> {
    const renderList= props.list && props.list.length>0 ? props.list : [] 
    const handleClick=(item:string)=> props.onClick ? props.onClick(item) : null; 
    return (
        <div>
            <Header header={props.header} />
            <ul className="list-ul">
                {renderList.slice(0,20).map(item =>{
                   return <li className="list-li" style={props.style} onClick={()=>handleClick(item)}>{item}</li>
                })}
            </ul>
        </div>
    )
}


