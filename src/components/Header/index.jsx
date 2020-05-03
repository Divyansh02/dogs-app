import React from 'react';
import './index.css';

export const Header = (props) => {
    return (
        <div className="header">
            <h2 className="list-h2">{props.header ? props.header : "Default Header"}</h2>
        </div>
    )
}
