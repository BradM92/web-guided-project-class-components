import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Allison",
            age: 22
        }
    }

    render() {
        return(<div>
            <h1>Hello {this.state.name}.</h1>
            <p>Your age is {this.state.age}.</p>
        </div>)
    }
}

export default App2;