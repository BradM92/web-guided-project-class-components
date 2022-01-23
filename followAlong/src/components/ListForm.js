import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      input = " "
    }

  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      ...this.state,
      input: e.target.value,
    })
  };

  // class property to submit form
handleSubmit = e => {
  e.preventDefault();
  this.props.handleAddItem(this.state.input);
  //1. capture click

  //2. change our state

  //3. retain state

  //4. 
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;