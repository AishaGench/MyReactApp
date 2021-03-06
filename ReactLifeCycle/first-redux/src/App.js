import './App.css';
import {connect} from 'react-redux'
import {updateUser, addUser,deleteUser} from './actions/userAction'


function App(props) {
  console.log("App Props=>", props)
  return (
    <div className="App">
      <h1>App Component</h1>
      {props.userReducer}
      <br/>
      <button onClick={()=> props.updateUser("Sevde")}>USER UPDATE</button>
      <button onClick={()=> props.addUser("Beyza")}>ADD USER</button>
      <button onClick={()=> props.deleteUser()}>DELETE USER</button>
    </div>
  );
}
const mapDispatchToProps ={
  updateUser, addUser,deleteUser
}
const mapStateToProps = state =>{
  return state
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
