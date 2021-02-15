import React, { Component } from 'react'

export default class CounterArrow extends Component {
    state={
        counter:0
    }

    increment = () =>{
        this.setState({
            counter :this.state.counter+1
        })
    }

    decrement = () =>{
        this.setState({
            counter:this.state.counter-1
        })
    }


    render() {
        return (
            <div>
                <h2>Counter Arrow : {this.state.counter}</h2>
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>Minus</button>
                  
            </div>
        )
    }
}
