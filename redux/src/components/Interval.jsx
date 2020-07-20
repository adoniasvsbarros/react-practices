import React from 'react';

import  { connect } from 'react-redux'

import './Interval.css';

import Card from './Card';
import { changeMinimumNumber, changeMaximumNumber } from '../actions/numbers.action'

const interval = props => {
    const {min, max} = props

    return (
        <Card title="Number interval" red>
            <div className="Interval"> 
                <span>
                    <strong>Minimum: </strong>
                    <input type="number" value={min} onChange={e => props.changeMinimum(+e.target.value)}/>
                </span>
                <span>
                    <strong>Maximum: </strong>
                    <input type="number" value={max} onChange={e=> props.changeMaximum(+e.target.value)}/>
                </span>
            </div>

        </Card>
    );
}

const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMinimum(newNumber) {
            const action = changeMinimumNumber(newNumber)
            dispatch(action)
        },
        changeMaximum(newNumber) {
            const action = changeMaximumNumber(newNumber);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(interval)