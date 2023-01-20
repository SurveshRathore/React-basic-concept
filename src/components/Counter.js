import React, { Component } from "react";    

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count + 1
            
        // })
        this.setState((prevState, props) => ({
            count:prevState.count + 1
        }))
        console.log(this.state.count)

    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={ () => this.increment() }>Increment</button>
                <button onClick={ () => this.incrementFive() }>Increment By 5</button>
            </div>
        )
    }
}

export default Counter