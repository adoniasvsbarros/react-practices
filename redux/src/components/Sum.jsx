import React from 'react';

import { connect } from 'react-redux'

import Card from './Card';

const sum = props => {
    const {min, max} = props
    
    return (
        <Card title="Number Sum" green>
            <div className="Interval"> 
                <span>
                    <strong>Result: </strong>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(sum)