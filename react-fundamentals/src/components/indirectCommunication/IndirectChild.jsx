import React from 'react';

export default props => {
    const myFunction = props.onClicked
    const min = 20;
    const max = 60;

    const generateAge = () => parseInt(Math.random() * (max - min)) + min;
    const generateBool = () => Math.random() > 0.5

    return (
        <div>
            <div>Child</div> 
            <button onClick={_ => {
                    myFunction('John', generateAge(), generateBool());
                }}>
                Send Info
            </button>
        </div>
    );
}