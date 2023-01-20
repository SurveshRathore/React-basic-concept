import React, { Component } from "react";

class EventClassProperty extends Component{
    constructor(props) {
        super (props)
    
        this.state = {
            message: 'Hello'
        }

    }

    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
        
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

export default EventClassProperty





