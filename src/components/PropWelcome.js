import React, { Component } from "react";    

class PropWelcome extends Component {
    render() {
        return<h1>class components, Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default PropWelcome