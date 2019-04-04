// Exporting more than one component

import React from 'react'

const First = props => (
    <h1>First component</h1>
)

const Second = props => (
    <h1>Second component</h1>
)

export { First, Second }

/*
// Another way to export

// if we use export default instead of conts, in the index.jsx we use import First { Second } from './component'
export const First = props => (
    <h1>First component</h1>
)

export const Second = props => (
    <h1
*/