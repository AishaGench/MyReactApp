import React, { Component } from 'react'
import '../styles/List.css'
import PropTypes from 'prop-types';

export default class List extends Component {

    static propTypes={
        contacts : PropTypes.array.isRequired
    }

    render() {
        console.log(this.props.contacts)
        return (
            <div className="listCompField">
                
                <input name="filter" id="filter" placeholder="Search by name or phone"/>
                <ul >

                {this.props.contacts.map((item)=>{
                 return(<li>
              <span className="name">{item.name}</span>
              <span className="phone">{item.phone}</span>
               </li>)
              })}
                </ul>

            </div>
        )
    }
}
