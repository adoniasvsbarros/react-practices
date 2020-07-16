import React from 'react';

import Inputs from './Inputs.css'

const inputs = props => {

    return(
        <div className="Inputs">
            <div className="Align">
                <label htmlFor="minInput">Min: </label>
                <input id="minInput" onChange={e => props.setMin(+e.target.value)} />

            </div>
            <div className="Align">
                <label htmlFor="maxInput">Max: </label>
                <input id="maxInput" onChange={e => props.setMax(+e.target.value)} />
            </div>
            <div className="Align">
                <label htmlFor="quantityInput">Quantity: </label>
                <input id="quantityInput" onChange={e =>  props.setQuantity(+e.target.value)} />
            </div>
        </div>
    );
}

export default inputs