import React, { Component } from "react";    

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitors'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks for subscribing us'
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe Us</button>
                    
                
            </div>
        )
    }
}

export default Message