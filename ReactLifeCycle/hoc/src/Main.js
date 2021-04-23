import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'
import Users from './Users'
import FirstNumber from './FirstNumber'
import SecondNumber from './SecondNumber'

export default class Main extends Component {
  state = {posts:[], users:[], firstNumber:Math.random(), secondNumber: Math.random(), loading:true}
  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .then(result =>{
      setTimeout(() => {
        this.setState({posts:result, loading:false})
      }, 5000);
    })

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(result =>{
      setTimeout(() => {
        this.setState({users:result, loading:false})
      }, 2000);
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({firstNumber:Math.random()})
    }, 1000);
  }
  

  render() {
    return (
      <div>
        <h1>Main Component</h1>
        {/* {this.state.loading === true ? "Loading..." : "Data is been received."} */}
        {/* <Posts data={this.state}/> */}
        <FirstNumber {...this.state}/>
        <SecondNumber {...this.state}/>
        <Posts {...this.state}/>
        <Users {...this.state}/>
      </div>
    )
  }
}


