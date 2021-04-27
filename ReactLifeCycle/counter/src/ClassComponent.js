import React, { Component } from 'react'

export default class ClassComponent extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      counter:0 ,
  //      loading: true
  //   }
  // }
  state ={counter:0, isVisible: false, timer:0}
  increase = () => {
    this.setState({counter: this.state.counter+1})
  }
  reset = () => {
    this.setState({counter: 0})
  }
  decrease = () => {
    this.setState({counter: this.state.counter-1})
  }
componentDidMount() {
  console.log("Class=> componentDidMount")
}
componentDidUpdate() {
  //console.log("Class=> componentDidUpdate")
  this.myTimer = setInterval(() => {
    this.setState({timer: this.state.timer +1})
  }, 1000);
}
componentDidUpdate(prevProps, prevState) {
  //console.log("Class=> componentDidUpdate")
}
componentWillUnmount() {
  console.log("componentWillUnmount is run...")
  clearInterval(this.myTimer)
}
}

  render() {
    //console.log('Class Component => ', this.state.counter )
    console.log('Timer: ',this.state.timer)
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
