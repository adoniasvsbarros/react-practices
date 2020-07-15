import React from 'react';

export default props => {
    return (
        <div>
            <div>Child</div> 
            <button onClick={_ => {
                    props.onClicked('John', 30, true);
                }}>
                Send Info
            </button>
        </div>
    );
}