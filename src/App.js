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
        },
        ],
      total:12,
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
      image: 'http://localhost/cssworking/videocurse/src/images/smartWatch.png' ,
      name: "Papas a la francesa",
      portion: "140g",
      price: 5,
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
    let {total,List} = this.state;
    /*let imgList = ['http://localhost/cssworking/videocurse/src/images/smartWatch.png', 'http://localhost/cssworking/videocurse/src/images/laptop.png', 'http://localhost/cssworking/videocurse/src/images/buyfood.png']
    let imgURL = imgList[Math.floor(2 * Math.random() + 1)];
    console.log(imgURL);
    */
    let imgURL = 'http://localhost/cssworking/videocurse/src/images/smartWatch.png';
    //console.log(imgURL);
    return (
      <div className="app">
        <h1>Ejemplo de listas</h1>
        <ul className="todo-list">
          {
            
            
            List.map((item, index) =>{
              return <Item List={item} image={imgURL} key={index} onRemove={() => this.remove(index)} />
            }
              
          )
          }
        </ul>
        <div className="footer">
          <Button
            onClick={this.add.bind(this)}
            name="Añadir producto"
          />
          <h4>
             ${this.state.total}
          
          
          </h4>
        </div>
      </div>
    );
  }
}

export default App;