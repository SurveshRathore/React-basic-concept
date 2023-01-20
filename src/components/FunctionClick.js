import React, { Component } from "react";

class FunctionClick extends Component{
    constructor(props) {
        super (props)
    
        this.state = {
            message: 'Hello'
        }
    }

    clickHandler() {
        this.setState({
            message: 'GoodBye'
        })
        console.log(this)
    }

    render() {
        return (
            <div>{this.state.message}
            <button onClick={this.clickHandler.bind(this)}>Event Handler bind</button>
            <button onClick={ () => this.clickHandler()}>Event Handler Arrow Function</button>
            
            
        </div>
        )
    }
}

export default FunctionClick