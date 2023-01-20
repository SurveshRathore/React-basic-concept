import React from "react";

const GreetPropDesBody = (props) => {
    const {name, heroName} = props
    return <h1>Hello {name} a.k.a {heroName}</h1>
}

export default GreetPropDesBody