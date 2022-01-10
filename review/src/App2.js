import React from 'react';



class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Chris",
            age: 33
        }
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            name:"Allison"
        });
    }

    render() {
        return(<div>
            <Person name={this.state.name} age={this.state.age}/>
            <button onClick={this.handleClick}>Change the name to Allison.</button>
        </div>)
    }
}

export default App2;