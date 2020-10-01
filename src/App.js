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
          image: "working.jpg",
          name: "General Software Development",
          portion: "Great UI/ and UE",
          price: 500,
        },
        ],
      total:0, // <<== Inicialisa a cero, depues de add el primer item se actualisa
      _debug:1
    }
    
    
  }

  remove(position) {
    let { List,_debug } = this.state;

    let updateData = List;
    updateData.splice(position,1);
    
    
    let rate = 0;
    List.map((value, index) => {
      rate += List[index].price;
    })
    if (!_debug) {
      console.log('Funcion remove,Item con indice:' +position);
      console.log('LastValue de rate:' +rate);
     
      
    }
    
    
    
        
    this.setState({ total: rate });

  }

  add() {
    let { List, _debug} = this.state; // Bring the state env vars to a local timestamp
       
    let allData = List;
    
    allData.push({
      image: "mApp.jpg",
      name: "Movile first philosophy",
      portion: "Android IOs development",
      price: 200,
    })
    
    let i= List.length-1; // Indice de posicion de ultima posicion en lista
    if(!_debug){
      console.log(i)
      console.log("Precio:" + List[i].price + " en posicion:" + i);
    }
    
    let rate = 0;
     List.map((value,index)=>{
       rate += List[index].price;
    })
    
    if(!_debug){
      console.log(rate);
    }
    
    /// Este no actualisa toda la vista solo los item añadidos --->> this.setState({ List: allData } );
    /// Actualisar todas las variables del state produce error de callback --->> this.setState({ List: allData },{total:rate} );
    this.setState({total:rate}) // <<== solo actualisar total del state array actualisa todo y no da problemas... RAROOOO!!!
    
  }

  
   
  

  render() {
    let {List,total} = this.state;
    return (
      <div className="app">
        <h4>
          Total:${total}
        </h4>
          <br/>
          <br/>
          <br/>

        <h1>Lista de productos:</h1>
        
        <ul className="todo-list">
          {List.map(
            (item, index) =>{
              return <Item itemData={item} key={index} onRemove={() => this.remove(index)} />
            }
              
          )
          }
        </ul>
        <div className="footer">
          <Button
            onClick={this.add.bind(this)}
            name="Añadir producto"
          />
          
        </div>
      </div>
    );
  }
}

export default App;