import React, { Component } from 'react'

export default class ChildMain extends Component {

    componentWillMount() {
        console.log('ChildMain componentWillMount is working... ')
    }

    componentDidMount() {
        console.log('ChildMain componentDidMount is working... ')
    }
    
    constructor(props) {
        super(props)

        console.log("ChildMain Constructor is working")
        console.log("ChildMain Props=> ", props)
    
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('ChildMain componentWillReceiveProps is working. nextProps=> ', nextProps)
    }
    
    // changNameChild = ()=>{
    //     this.props.changNameChild()
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('ChildMain shouldComponentUpdate is working.. ')
    }
    

    render() {
        console.log('ChildMain render is working... ')
        return (
            <div>
                <h2>ChildMain Component...</h2>
                <b>Props {this.props.name}</b><br/>
                <button onClick={()=>{this.props.changeName()}}>Change the name</button>
            </div>
        )
    }
}
