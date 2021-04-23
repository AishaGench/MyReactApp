import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter:0
    }
  }
  // state ={counter:0}
  increase = () => {
    this.setState({counter: this.state.counter+1})
  }
  reset = () => {
    this.setState({counter: 0})
  }
  decrease = () => {
    this.setState({counter: this.state.counter-1})
  }

  render() {
    console.log('Class Component => ', this.state.counter )
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increase}>+</button>
        <button onClick={this.reset}>0</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}