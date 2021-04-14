import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props)
        console.log("Props=> ", this.props)
        this.state = {
             name:"John"
        }
    }
    



    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Main Component... Hello {this.state.name}</h3>
            </div>
        )
    }
}
