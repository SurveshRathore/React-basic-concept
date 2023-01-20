import React, { Component } from "react";

class EventConstructor extends Component{
    constructor(props) {
        super (props)
    
        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'GoodBye!'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>Event Handler</button>
            
            
        </div>
        )
    }
}

export default EventConstructor





