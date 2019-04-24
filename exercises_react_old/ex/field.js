// Controlled and not controlled components

import React, { Component } from 'react'

class Field extends Component{

    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
        // this.sate = { value: undefined} // uncontrolled
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    render(){
        return (
            <div>
                <label>{ this.state.value }</label>
                <input onChange={this.handleChange} value={this.state.value}></input>
                {/* <input value={this.state.value}></input> uncontrolled component */}
            </div>
        )
    }
}

export default Field