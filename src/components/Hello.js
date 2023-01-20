import React from "react";

const Hello = () =>  {
    // return (
    //     <div className: 'dummyClass'>
    //         <h1>Some things on JSX</h1>
    //     </div>
    // )

    //return React.createElement('div', null, ' <h1>Some things on JSX</h1>')
    return React.createElement
    (
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, "Some things on JSX") )
}

export default Hello