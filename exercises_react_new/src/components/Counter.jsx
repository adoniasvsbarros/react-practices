import React, {Component} from 'react'

export default class Counter extends Component {
    state = {
        number: this.props.initialNumber
    }

    add = () => {
        this.setState({number: this.state.number + 1 })
        //this.state.number++;
    }

    sub = () => {
        this.setState({number: this.state.number - 1 })
    }

    changeNumber = difference => {
        this.setState(
            {number: this.state.number + difference}
        )
    }
    
    render(){
        return (
            <div>
                <div>Number: {this.state.number}</div>
                <button onClick={this.add}>Add</button>
                <button onClick={this.sub}>Sub</button>
                <button onClick={() => this.changeNumber(+10)}>Add10</button>
                <button onClick={() => this.changeNumber(-10)}>Sub10</button>
            </div>
        )
    }
}

/*
// solution 1, using constructor
constructor(props){
    super(props)
    this.add = this.add.bind(this)
}

// solution 2, using arrow function (onClick)
<button onClick={() => this.add()}>Add</button>

// solution 3, using arrow function
add = () => {
    this.props.number++;
}
*/