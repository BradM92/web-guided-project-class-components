import React from 'react'

class App2 extends React.Component{
    constructor() {
        super();
        this.state = {
            name: 'Brad',
            age: 30,
        }
    }
    render() {
        const name = "Cynthia";
        const age = "31";
        return(
            <div><p>Hello {this.state.name}</p>
            <p>Your age is {this.state.age}</p>
            <button onClick = {() => {
                this.state({
                    ...this.state,
                    name: "Rose",
                })
            }}>change name to Rose</button>
            </div>
        )
    }
}

export default App2;