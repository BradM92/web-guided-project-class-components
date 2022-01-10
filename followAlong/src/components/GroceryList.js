import React from "react";

import Item from "./Item";

// const GroceryList = props => {
//   // for sorting the list based on whether an item has been purchased or not
//   // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
//   return (
//     <div className="shopping-list">
//       {props.groceries.map(item => (
//         <Item handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
//       ))}
//     </div>
//   );
// };

class GroceryList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="shopping-list">
         {
          this.props.groceries.map(item => (
            <Item handleToggleItem={this.props.handleToggleItem} key={item.id} item={item} />
         ))}
       </div>
    )
  }
}

export default GroceryList;