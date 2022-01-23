import React from 'react'

class App2 extends React.Component{
    constructor() {
        super();
        this.state = {
            name: 'Brad',
            age: 30,
        }
    }
    handleClick = () => {
        this.setState({
            ...this.state,
            name: "Rose"
        })
    }
    render() {
        const name = "Cynthia";
        const age = "31";
        return(
            <div><p>Hello {this.state.name}</p>
            <p>Your age is {this.state.age}</p>
            <button onClick = {this.handleClick}>change name to Rose</button>
            </div>
        )
    }
}

export default App2;