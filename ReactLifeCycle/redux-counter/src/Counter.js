import React from 'react'
import { connect } from 'react-redux'
import { decreaseCount, increaseCount } from './actions/counterAction'


const Counter = (props) => {
    return (
        <div>
           <h2>Counter Component</h2> 
           <button onclick={()=>decreaseCount()}>-</button>
           <span style={{padding:"10px"}}>{props.count}</span>
           <button onClick={()=>increaseCount()}>+</button>
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
