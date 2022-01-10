import React from "react";

class ListForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    // update state with each keystroke
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddItem("Chips");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;