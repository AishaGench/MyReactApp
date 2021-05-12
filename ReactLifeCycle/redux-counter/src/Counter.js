// created with rfcredux snippet
import React from 'react'
import { connect } from 'react-redux'
import {increaseCount, decreaseCount} from './actions/counterAction'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'


const Counter = (props) => {
  return (
    <div>
      <h2>Counter Component</h2>
      <Button content='DECREASE' icon='minus' labelPosition='left' onClick={()=>props.decreaseCount()}/>
      <span style={{padding:"10px"}}>{props.count}</span>
     <Button content='INCREASE' icon='plus' labelPosition='right' onClick={()=>props.increaseCount()}/>
  
      {/* <button onClick={()=>props.decreaseCount()}>-</button>
      <span style={{padding:"10px"}}>{props.count}</span>
      <button onClick={()=>props.increaseCount()}>+</button> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {count:state.count}
}

const mapDispatchToProps = {
  increaseCount, decreaseCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
