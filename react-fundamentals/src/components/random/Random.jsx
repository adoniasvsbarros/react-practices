import React from 'react';

export default props => {
    const {min, max} = props;

    const generatedNumber =  Math.floor(Math.random() * (max - min + 1) + min);

    return (
        <div>
            <h2>Random number generator between { min } and { max }</h2>
            Random generated number: { generatedNumber }
        </div>
    );
}