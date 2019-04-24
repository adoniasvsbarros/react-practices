import React from 'react'

/*
export default function first(){
    return <h1>First component!</h1>
}
*/
/*
export default () =>  
    <h1>First component with arrow function!</h1>
*/

export default (props) =>
    <div>
        <h1>{props.value}</h1>
    </div>