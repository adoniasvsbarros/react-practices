import React, {Component} from 'react';

import './Counter.css'

import Display from './Display';
import Buttons from './Buttons';
import Step from './Step';

class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 5
    }


    increment = () => {
        this.setState({
            number: this.state.number + this.state.step
        });
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.step
        });
    }

    changeStep = newStep => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <Step step={this.state.step} onChangeStep={this.changeStep}/>
                <Buttons onInc={this.increment} onDec={this.decrement}/>
            </div>
        )
    }
}

export default Counter