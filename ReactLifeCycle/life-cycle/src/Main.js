import React, { Component } from 'react'
import ChildMain from './ChildMain'

export default class Main extends Component {

    constructor(props) {
      super(props)
      console.log('I. Main Constructor running...')
      //console.log("Props => ", this.props, "State => ", this.state)
      // this.state = {
      //   name: 'John'
      // }
    }
    state = {
      name: 'John'
    }

    componentWillMount() {
      console.log('II. Main componentWillMount is running..')
    }
  
    componentDidMount() {
      console.log('IV. Main componentDidMount is running..')
    //   setTimeout(()=>{
    //       this.setState({name: 'Tom'})
    //   }, 10000)
    }
    
    changeName = () =>{
        this.setState({name: 'Aysegul'})
    }

     render() {
      console.log('III. Main RENDER is running')
      return (
        <div>
          <h3>Main Component...</h3>
          <h4>PROPS: {this.props.testProps}</h4>
          <h4>STATE: {this.state.name}</h4>
          <hr/>
          <ChildMain  name={this.state.name} changeName={this.changeName}/>
  
  
        </div>
      )
    }
}