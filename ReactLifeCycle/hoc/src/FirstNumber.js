import React, { Component } from 'react'

export default class FirstNumber extends Component {
  render() {
    return (
      <div>
        <h1>First Number</h1> 
        <b>{this.props.firstNumber}</b> 
      </div>
    )
  }
}
