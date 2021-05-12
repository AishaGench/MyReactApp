import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log("App Props=>", props)
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
const mapStateToProps = state =>{
  return state
}
export default connect(mapStateToProps) (App);
