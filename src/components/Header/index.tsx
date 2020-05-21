import React from 'react';
import './index.css';

interface HeaderProps{
    style?:{};
    header:string | undefined;
}

export const Header = (props:HeaderProps) :React.ReactElement=> {
    return (
        <div className="header">
            <h2 className="list-h2" style={props.style}>{props.header ? props.header : "Default Header"}</h2>
        </div>
    )
}
