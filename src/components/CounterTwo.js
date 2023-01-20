import React, { Component } from "react";    

class CounterTwo extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    incrementByTwo(){
        this.setState({
            count: this.state.count + 1
            
        }
        // ,
        // () => {
        //     console.log('Callback value'.this.state.count)
        // }
        )
        console.log(this.state.count)

    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={ () => this.incrementByTwo() }>Increment By 1</button>
            </div>
        )
    }
}

export default CounterTwo