import React from 'react';

export default props => {
    const isEven = props.number % 2 === 0;


    return (
        <div>
            <span>{ props.number } is </span>
            {   
                isEven ? 
                <span>Even</span> : 
                <span>Odd</span>
            }
        </div>
    );
};