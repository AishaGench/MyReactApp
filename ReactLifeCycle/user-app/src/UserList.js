import React from 'react'
import User from './User'

function UserList({users, changeColor}) {
  console.log(users)
  return (
    <div>
      <h2>User List</h2>
      {users.map(item=>(<User key={item.id} user={item} changeColor={changeColor}/>))}
    </div>
  )
}

export default UserList
