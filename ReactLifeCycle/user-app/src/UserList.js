import React, { useContext } from 'react'
import User from './User'
import { UserContext } from './context/UserContext'

function UserList() {
  const {users} = useContext(UserContext)
  console.log(users)
  return (
    <div>
      <h2>User List</h2>
      {users.map(item=>(<User key={item.id} user={item}/>))}
    </div>
  )
}

export default UserList