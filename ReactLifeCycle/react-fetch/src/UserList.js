import React, { Component } from 'react'
import axios from "axios"

export default class UserList extends Component {
    state={
        users:[],  
        isLoading: true
    }

    componentDidMount() {
        
            // fetch('https://jsonplaceholder.typicode.com/users')
            // .then(response => response.json())
            // //.then(json => console.log(json))
            // .then((jsonData)=>this.setState({users:jsonData})
            // )


            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((jsonData)=>this.setState({users:jsonData.data, isLoading:false})
            )
       
    }

    
    render() {
        const {isLoading, users} = this.state
        console.log(this.state.users)
        return (
            <div>
                <h2>UserList Component</h2>
                {isLoading === true ? "Loading..." : this.state.users.map((item)=>{
        return <div key={item.id}> {item.name}</div>
      })}

                {/* {this.state.users.map((item)=>(
                    <div key ={item.id}>{item.name} {item.username}</div>
                ))} */}
            </div>
        )
    }
}
