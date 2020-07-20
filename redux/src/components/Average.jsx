import React from 'react';
import { connect } from 'react-redux'

import Card from './Card';

const average =  props => {
    const {min, max} = props 

    return (
        <Card title="Number Average" blue>
            <div className="Interval"> 
                <span>
                    <strong>Result: </strong>
                    <strong>{(max + min)/2}</strong>
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

export default connect(mapStateToProps)(average)