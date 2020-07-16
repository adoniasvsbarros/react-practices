import React, { useState } from 'react';

import Display from './Display';
import Button from './Button';
import Inputs from './Inputs';

export default props => {

    const [quantity, setQuantity] = useState(props.quantity || 6)
    const [min, setMin] = useState(props.min || 0)
    const [max, setMax] = useState(props.max || 60)
    const [numberList, setNumberList] = useState(Array(props.quantity || 6).fill(0))
    

    const generateNumbers = (min, max, quantity) => {
        const generatedNumbers = Array(quantity)
            .fill(0)
            .reduce((nums) => {
                const randomNumber = generateRandomNumberNotContained(min, max, nums); 
                return [...nums, randomNumber];
            }, [])
            .sort((n1, n2) => n1 - n2);


        setNumberList(generatedNumbers)
    } 

    const generateRandomNumberNotContained = (min, max, array) => {
        const randomNumber = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(randomNumber) ? generateRandomNumberNotContained(min, max, array): randomNumber;
    }

    return (
        <>
            <Display numberList={numberList}/>
            <Button  onGenerate={generateNumbers} min={min} max={max} quantity={quantity}/>
            <Inputs setMin={setMin} setMax={setMax} setQuantity={setQuantity}/>
        </>
    );

}
