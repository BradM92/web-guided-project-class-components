import React from 'react';

// const Person = (props) => {
//     return(<div>
//         <h1>Hello {props.name}.</h1>
//         <p>Your age is {props.age}.</p>
//     </div>);
// }

class Person extends React.Component {
    render() {
        return(<div>
            <h1>Hello {this.props.name}.</h1>
            <p>Your age is {this.props.age}.</p>
        </div>);
    }
}


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