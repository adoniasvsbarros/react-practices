import React from 'react';

import './Display.css'

const display = props => {
    return(
        <div className="Display">
            {props.numberList?.map(number => {
                return `${number} `;
            })}
        </div>
    );
}

export default display;