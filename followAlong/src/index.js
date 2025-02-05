import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Class methods to update state
  constructor(){
    super();
    this.state = {
      groceries: groceries,
    }
  }
  //toggle clear purchased
  handleClearPurchased = () => {
    //capture click step 1

    //change state step 2

    //retain previous state step 3

    //change groceries removed all items pruchaed == true step 4
    const newGroceries = this.state.groceries.filter(item => {
      return item.purchased === false;
    }) 
    this.setState({
      ...this.state,
      groceries: newGroceries
    })


  }

  //add item
  handleAddItem = () => {
    const newItem = {
      name: "chips",
      id: Date.now,
      purchased: false,
    }
    this.state({
      ...this.state,
      groceries: [...this.state.groceries, newItem],
    })
  }
  //class methods to update
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm  handleAddItem = {this.handleAddItem}/>
         </div>
        <GroceryList groceries={this.state.groceries} />
        <button onClick={this.handleClearPurchased} className="clear-btn">Clear Purchased</button> 
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);