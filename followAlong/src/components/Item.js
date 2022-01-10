import React from 'react';

const Item = props => {
  const handleClick = () => {
    props.handleToggleItem();
  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;