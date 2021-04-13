import React, { Component } from 'react'
import '../styles/Form.css'
import PropTypes from 'prop-types';



export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: "",
        }
    }

    static checkProps ={addContact: PropTypes.func}

      onChange = (e) => {
          /*
        console.log(e.target.value)
        if(e.target.name === 'name') {
          this.setState({name:e.target.value})
        }else if (e.target.name === 'phone'){
            this.setState({
                phone:e.target.value
            })
        }
        */
        this.setState({ [e.target.name]: e.target.value });
      };

      sendForm = (e) => {
          e.preventDefault();
          this.props.addContact({...this.state})

          this.setState({name:'', phone:''})

      }


    render() {
        return (
            <form onSubmit={this.sendForm} className="formField">
                <h2>Form</h2>

                <input onChange={this.onChange} name="name" id="name" placeholder="Enter a name..." value={this.state.name}/>

                <input onChange={this.onChange} name="phone" id="phone" placeholder="Enter a phone number..." value={this.state.phone}/>

                <button>ADD</button>

            </form>
        )
    }
}
