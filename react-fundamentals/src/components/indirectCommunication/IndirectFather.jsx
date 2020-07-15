import React, { useState } from 'react';
import IndirectChild from './IndirectChild';

export default props => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [bool, setBool] = useState(false)

    const giveInfo = (name, age, bool) => {
        setName(name);
        setAge(age);
        setBool(bool);
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