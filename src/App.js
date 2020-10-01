import React from 'react';
import Item from './Item';
import Button from './Button'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          image: "hambuerger.png",
          name: "Hambueger",
          portion: "150g",
          price: 12,
        }
      ]
    }
  }

  remove(position) {
    let { List } = this.state;

    let newData = [
      ...List.slice(0, position),
      ...List.slice(position + 1),
    ]

    this.setState({ List: newData });

  }

  add() {
    let { List } = this.state;
    let newData = [
      ...List,
      {
        image: "papas.png",
        name: "Papas a la francesa",
        portion: "140g",
        price: 5,
      }
    ]
    
    
    
    this.setState({ List: newData });
  }

  


  render() {
    return (
      <div className="app">
        <h1>Ejemplo de listas</h1>
        <ul className="todo-list">
          {this.state.List.map(
            (item, index) =>
              <Item List={item} key={index} onRemove={() => this.remove(index)} />
          )
          }
        </ul>
        <div className="footer">
          <Button
            onClick={this.add.bind(this)}
            name="Añadir producto"
          />
          <h4>Test</h4>
        </div>
      </div>
    );
  }
}

export default App;