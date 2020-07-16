import React from 'react';


const button = props => {
    return (
        <button onClick={e => props.onGenerate(props.min, props.max, props.quantity)}>Generate Numbers</button>
    );
}

export default button;