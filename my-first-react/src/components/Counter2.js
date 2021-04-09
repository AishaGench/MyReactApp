import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props){
        super(props);
        

    }
    state ={
        number:0
    }
    counter =() =>{
        if(this.state.number <= 9){
            this.setState({
                number: this.state.number + 1
            });
        }

        if(this.state.number === 9){
            document.body.style.backgroundColor = "coral"
        }

    }
    decrease =()=>{
        if(this.state.number >= -9){
            this.setState({
                number: this.state.number - 1
                
            })
        }
        
        
        if(this.state.number === -9){
            document.body.style.backgroundColor = "violet"
        }
    }
    render() {
        return (
            <div>
               <button onClick ={this.counter}>Increment</button>
               <button onClick ={this.decrease}>Decrement</button>
               <p id="result">{this.state.number}</p>
               
            </div>
        )
    }
}
 
