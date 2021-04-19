import React, { Component } from 'react'

export default class UserList extends Component {
    state={user:[]}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
    }
    
    render() {
        return (
            <div>
                <h2>UserList Component</h2>
            </div>
        )
    }
}
