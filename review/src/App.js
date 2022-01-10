import React, { useState } from "react";

const Person = (props) => {
  return(<div>
    <h1>Hello {props.name}.</h1>
    <p>It's so good to met you {props.name}</p>
    <p>You are {props.age} years old.</p>
  </div>);
}

const App = () => {
  const [state, setState] = useState({
    name: "Warren",
    age: 33
  });

  const handleClick = () => {
    setState({
      ...state,
      name:"Allison",
      age: 11
    });
  }

  return (
    <div>
      <Person name={state.name} age={state.age}/>
      <button onClick={handleClick}>Change your name to Allison.</button>
    </div>
  );
};

export default App;