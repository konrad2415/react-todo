import React from 'react';
import './App.css'

class Item extends React.Component {
   
  
  deleteItem() {
    if (this.props.onRemove)
      this.props.onRemove();
    
  }
  render() {
    let tmp = this.props.List.image;
    
    return (
      <li>
        <div className="icon">
        
          <img src={tmp} 
                     alt="hambuerger" />

        </div>
        <div className="name">
          <span className="item-name">{this.props.List.name}</span>
          <span className="item-price">{this.props.List.portion}</span>
        </div>
        <div className="price">
          <h3>${this.props.List.price}</h3>
        </div>
        <button className="remove" onClick={this.deleteItem.bind(this)}>
          <i className="material-icons">-</i>
        </button>
      </li>
    )
  }
}


export default Item;