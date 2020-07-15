import React from 'react';

const step = props => {
    return (
        <div className="Step">
            <label htmlFor="inputStep">Step: </label>
            <input id="inputStep" value={props.step} onChange={e => {
                props.onChangeStep(+e.target.value)
            }} />
        </div>
    );
};

export default step;