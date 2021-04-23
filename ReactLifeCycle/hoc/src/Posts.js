import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc'

class Posts extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="postContainer">
        {this.props.loading ? <div>Loading...</div> : this.props.posts.map(item =><div key={item.id}>{item.title}</div>)}
      </div>
    )
  }
}

export default LoaderHoc(Posts, 'posts')
