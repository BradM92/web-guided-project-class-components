import React from "react";

class ListForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    // update state with each keystroke
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    //1. Capture our click
    //2. change our state
    //3. retain previous state
    //4. add to groceries an new groceries

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