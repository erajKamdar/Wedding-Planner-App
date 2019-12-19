import React from 'react';

export default function Header ({title, subtitle}) {
    return (
        <div className="header">
            <h1>{title}</h1>
            
            <p>{subtitle}</p>
            <div> </div>
        </div>
    )
}