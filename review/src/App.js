import React,  {useState} from "react";

const Person = (props) =>{
  return(
    <div>
      <h1>Hello {props.name}</h1>
      <p>You are {props.age} years old</p>
      <button onClick={()=>{
        setState({
          ...state,
          name: "Michael"
        })
      }}>Press to change name to Adam !</button>
    </div>
  )
}
const App = () => {
  const [state,setState] = useState({
    name: "Brad",
    age: 30,

  });

  const handleClick = () => {
    setState({
      ...state,
      name: "Adam"
    });
  }
  return (
    <div>
      <Person name ={this.state.name} age={this.state.age}/>
      
    </div>
  );
};

export default App;