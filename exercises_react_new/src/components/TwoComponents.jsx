import React from 'react'

const CompA = props =>
    <h1>First component says {props.value}</h1>

const CompB = props =>
    <h1>Second component says {props.value}</h1>

export {CompA, CompB}    