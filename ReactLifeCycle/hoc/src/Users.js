import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc'

class Users extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="postContainer">
        {this.props.loading ? <div>Loading...</div> : this.props.users.map(item =><div key={item.id}>{item.name}</div>)}
      </div>
    )
  }
}

export default LoaderHoc(Users,'users')
