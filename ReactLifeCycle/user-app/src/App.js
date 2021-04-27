import './App.css';
import UserList from './UserList'
import React, { useState } from 'react'

const data = [
  {id:1, name:"John", email:"john@email.com", age: 33, color:"purple"},
  {id:2, name:"Jane", email:"jane@email.com", age: 43, color:"coral"},
  {id:3, name:"Emily", email:"emily@email.com", age: 25, color:"honeydew"}
]
function App() {
  const [users, setUsers] = useState(data)
  return (
    <div className="App">
     <h1>Welcome</h1>
     <UserList users={users}/>
    </div>
  );
}

export default App;