import React, { Component } from 'react'

export default class DataBinding extends Component {

    constructor(props){
        super(props)
        console.log("Constructor is running...")
        // BIND- III
        // this.buttonClick = this.buttonClick.bind(this)
        console .log(this.props)
        this.state = {}
    }

   buttonClick () {
       console.log('DATABINDING button is clicked...')
       this.props.appJsClick("123");
   }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>DataBinding Component</h1>
                {/* BIND -I */}
                {/* <button onClick = {this.buttonClick.bind(this)} >CLICK</button> */}

                {/* BIND -II */}
                <button onClick = {()=>{this.buttonClick.bind(this)}} >CLICK</button>
                <h2></h2>
            </div>

        )

            
    }
}
