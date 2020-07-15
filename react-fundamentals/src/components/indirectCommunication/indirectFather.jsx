import React from 'react';
import IndirectChild from './indirectChild';

export default props => {
    let name = '?'
    let age = 0
    let bool = false

    const giveInfo = (nameParam, ageParam, boolParam) => {
        name = nameParam;
        age = ageParam;
        bool = boolParam;
    };


    return (
        <div>
            <div>Father</div>
            <span>{name} </span>
            <span>{age} </span>
            <span>{bool ? 'True': 'False'} </span>
            <IndirectChild onClicked={giveInfo}/>
        </div>
    );
}