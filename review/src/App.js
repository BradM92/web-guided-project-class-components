import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");
  const [age, setAge ] = useState(33);

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

export default App;