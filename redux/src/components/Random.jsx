import React from 'react';

import { connect } from 'react-redux'

import Card from './Card';

const random = props => {
    const {min, max} = props
    const random = parseInt((Math.random() * max + 1 - min)) + min

    return (
        <Card title="Number Sorting" purple>
            <div className="Interval"> 
                <span>
                    <strong>Result: </strong>
                    <strong>{random}</strong>
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

export default connect(mapStateToProps)(random)