import React, { Component } from 'react';

class Button extends Component{
    
    add(){
        if(this.props.onClick)
            this.props.onClick();
    }

    render(){
        return (
            <button className="add-button" onClick={this.add.bind(this)}>
                {this.props.name}
            </button>
        )
    }
}

export default Button;