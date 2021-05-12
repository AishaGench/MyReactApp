import './App.css';
import {connect} from 'react-redux'
import {updateUser} from './actions/userAction'

function App(props) {
  console.log("App Props=>", props)
  return (
    <div className="App">
      <h1>App Component</h1>
      {props.userReducer}
      <br/>
      <button onClick={()=> props.updateUser("Sevde")}>UPDATE USER</button>
    </div>
  );
}
const mapDispatchToProps ={
  updateUser
}
const mapStateToProps = state =>{
  return state
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
