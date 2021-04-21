import React, { Component } from 'react'

const LoaderHoc = (WrappedComponent) => {
  return class LoaderHoc extends Component {
    render() {
      return this.props.posts.length === 0 ? (<div>Loading...</div>):
      <WrappedComponent{...this.props}/>
    }
  }
}

export default LoaderHoc;