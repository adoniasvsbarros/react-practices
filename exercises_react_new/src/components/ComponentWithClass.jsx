import React, { Component } from 'react'
//import React from 'react'

export default class ComponentWithClass extends Component /* React.Component */{
    render() {
        return (
            <h1>{this.props.value || 'Pattern'}</h1>
        )
    }
}
