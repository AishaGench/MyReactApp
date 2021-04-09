
import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        number: 0,
      };

      increaseState = () => {
        this.setState({ number: ++this.state.number });
      };
      
      decreaseState = () => {
        if (!this.state.number == 0) {
          this.setState({ number: --this.state.number });
        }
      };

    render() {
        return (
            <div>
               <h1>{this.state.number}</h1>
                <button onClick={this.decreaseState}> - </button>
                <button onClick={this.increaseState}> + </button> 
            </div>
        )
    }
}
