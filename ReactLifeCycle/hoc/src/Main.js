import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'

export default class Main extends Component {
  state = {posts:[], loading:true}
  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .then(result =>{
      setTimeout(() => {
        this.setState({posts:result, loading:false})
      }, 3000);
    })
  }

  render() {
    return (
      <div>
        <h1>Main Component</h1>
        {/* {this.state.loading === true ? "Loading..." : "Data is been received."} */}
        {/* <Posts data={this.state}/> */}
        <Posts {...this.state}/>
      </div>
    )
  }
}


