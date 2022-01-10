import React from 'react';

class App2 extends React.Component {
    constructor() {
        
    }

    render() {
        const name = "Warren";
        const age = 33;

        return(<div>
            <h1>Hello {name}.</h1>
            <p>Your age is {age}.</p>
        </div>)
    }
}

export default App2;