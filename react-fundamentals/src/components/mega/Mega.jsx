import React from 'react';

import Display from './Display';
import Button from './Button';
import Inputs from './Inputs';

class Mega extends React.Component {

    state = {
        quantity: this.props.quantity || 6,
        min: this.props.min || 0,
        max: this.props.max || 60,
        numberList: Array(this.props.quantity || 6).fill(0)
    }

    setMin = newMin => {
        this.setState({
            min: newMin
        })
    }

    setMax = newMax => {
        this.setState({
            max: newMax
        })
    }

    setQuantity = newQuantity => {
        this.setState({
            quantity: newQuantity
        })
    }

    setNumberList = newNumberList => {
        this.setState({
            numberList: newNumberList
        })
    }

    generateNumbers = (min, max, quantity) => {
        const generatedNumbers = Array(quantity)
            .fill(0)
            .reduce((nums) => {
                const randomNumber = this.generateRandomNumberNotContained(min, max, nums); 
                return [...nums, randomNumber];
            }, [])
            .sort((n1, n2) => n1 - n2);


        this.setState({
            numberList: generatedNumbers
        })
    } 

    generateRandomNumberNotContained = (min, max, array) => {
        const randomNumber = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(randomNumber) ? this.generateRandomNumberNotContained(min, max, array): randomNumber;
    }


    render() {
        return (
            <>
                <Display numberList={this.state.numberList}/>
                <Button  onGenerate={this.generateNumbers} min={this.state.min} max={this.state.max} quantity={this.state.quantity}/>
                <Inputs setMin={this.setMin} setMax={this.setMax} setQuantity={this.setQuantity}  />
            </>
        );
    }
}

export default Mega