import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    name: "Warren",
    age: 33
  });

  return (
    <div>
      <h1>Hello {state.name}</h1>
      <p>You are {state.age} years old.</p>
    </div>
  );
};

export default App;