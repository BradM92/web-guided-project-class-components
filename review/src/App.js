import React, { useState } from "react";

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
      <h1>Hello {state.name}.</h1>
      <p>You are {state.age} years old.</p>
      <button onClick={handleClick}>Change your name to Allison.</button>
    </div>
  );
};

export default App;