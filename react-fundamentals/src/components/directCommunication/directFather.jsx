import React from 'react';
import DirectChild from './directChild';

export default props => {
    return (
        <>
        <DirectChild text="child1" age={20} bool={true} />
        <DirectChild text="child2" age={17} bool={false} />
        </>
    );
}