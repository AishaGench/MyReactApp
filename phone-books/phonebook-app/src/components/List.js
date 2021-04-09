import React, { Component } from 'react'
import '../styles/List.css'

export default class List extends Component {
    render() {
        return (
            <div className="listCompField">
                
                <input name="filter" id="filter" placeholder="Search by name or phone"/>
                <ul >

                    <li>
                        <span className="name">Name 1</span>
                        <span className="phone">Phone 1</span>
                    </li>
                    <li><span className="name">Name 2</span>
                        <span className="phone">Phone 2</span>
                    </li>
                    <li><span className="name">Name 3</span>
                        <span className="phone">Phone 3</span>
                    </li>
                </ul>

            </div>
        )
    }
}
