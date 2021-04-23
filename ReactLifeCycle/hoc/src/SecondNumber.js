import React, { PureComponent } from 'react'

export default class SecondNumber extends PureComponent {
//   shouldComponentUpdate(nextProps, nextState) {
//       {if(this.props.secondNumber === nextProps.secondNumber){
//           return false;
//       }}
//   }
  
    render() {
      console.log("Second Number Component run...")
    return (
      <div>
        <h1>Second Number</h1>
        <b>{this.props.secondNumber}</b>
      </div>
    )
  }
}
