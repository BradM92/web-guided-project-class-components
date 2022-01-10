import React, { useState } from "react";

const Person = () => {
  return(<div>
    <h1>Hello {state.name}.</h1>
    <p>It's so good to met you {state.name}</p>
    <p>You are {state.age} years old.</p>
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
      name:"Allison"
    });
  }

  return (
    <div>
      <Person />
      <button onClick={handleClick}>Change your name to Allison.</button>
    </div>
  );
};

export default App;