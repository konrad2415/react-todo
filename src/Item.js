import React from 'react';
import './App.css';

class Item extends React.Component {
  deleteItem() {
          this.props.onRemove();
  }
  render() {
    let {itemData} = this.props; //< --  pa la flojera de no poner los this.props
    return (
      <li>
        <div className="icon">
          <img src={require(`./${itemData.image}`)} alt="All plataforms supported" />
        </div>
        <div className="name">
          <span className="item-name">{itemData.name}</span>
          <span className="item-price">{itemData.portion}</span>
        </div>
        <div className="price">
          <h3>${this.props.itemData.price}</h3>
        </div>
        <button className="remove" onClick={this.deleteItem.bind(this)}>
          <i>Delete!</i>
        </button>
      </li>
    )
  }
}


export default Item;