import React from 'react'

// solution 1 (maybe the most used)

export default () =>
    <div>
        <h1>First part</h1>
        <h2>Second part</h2>
    </div>

// solution 2
/*
export default props =>
    <React.Fragment>
        <h1>First part</h1>
        <h2>Second part</h2>
    </React.Fragment>
*/

// solution 3
/*
export default props => [
    <h1>First part</h1>,
    <h2>Second part</h2>
]
*/