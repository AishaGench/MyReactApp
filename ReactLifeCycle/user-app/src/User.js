import React from 'react'

export default function User({user}) {
    return (
        <div style = {{background:user.color}}>
            <h3>Name: {user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Age : {user.age}</p>
            color:<input value={user.color}/>
        </div>
    )
}
