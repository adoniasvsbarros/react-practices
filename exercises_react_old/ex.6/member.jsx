// passing properties from parent component to children

import React from 'react'

export default props => (
    <div>{props.name} <strong>{props.lastName}</strong></div>
)