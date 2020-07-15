import React from 'react';

export default props => {
    return (
        <div>
            <span>name: {props.text} </span>
            <span>age: {props.age} </span>
            <span>bool: {props.bool ? 'True': 'False'}!</span>
        </div>
    );
}