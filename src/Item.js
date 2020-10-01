import React from 'react';
import './App.css'

class Item extends React.Component {
  _remove() {
    if (this.props.onRemove)
      this.props.onRemove();
  }
  render() {
    return (
      <li>
        <div className="icon">
          <img src={require(`./${this.props.List.image}`)} alt="hambuerger" />
        </div>
        <div className="name">
          <span className="item-name">{this.props.List.name}</span>
          <span className="item-price">{this.props.List.portion}</span>
        </div>
        <div className="price">
          <h3>${this.props.List.price}</h3>
        </div>
        <button className="remove" onClick={this._remove.bind(this)}>
          <i className="material-icons">close</i>
        </button>
      </li>
    )
  }
}


export default Item;