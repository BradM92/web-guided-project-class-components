import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: true
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
    purchased: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    };
  }

  //Toggle Clear Purchased
  handleClearPurchased = ()=> {
    //1. Capture our click
    //2. Change our state setState
    //3. Retain our previous state.
    //4. change groceries: remove all items where purchased == true

    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter(item => {
        return !item.purchased;
      })
    });
  }

  //Add Item

  //Toggle Purchased

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm />
         </div>
        <GroceryList groceries={this.state.groceries} />
        <button onClick={this.handleClearPurchased}className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);