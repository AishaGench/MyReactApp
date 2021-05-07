import './App.css';
import {createStore} from 'redux'
import { act } from 'react-dom/test-utils';

function reducer(state,action){
  console.log('Action parameters =>', action)
  if(action.type ==='changeTheState'){
    return action.payload.newState
  }
  return 'State1223344'
}
const myStore = createStore(reducer)
console.log('Old State =>', myStore.getState())

const action = {type:'changeTheState',payload:{newState:'My new State...'}}

myStore.dispatch(action)
myStore.dispatch(action)
myStore.dispatch(action)

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}

export default App;
