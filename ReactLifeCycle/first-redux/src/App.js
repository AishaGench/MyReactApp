import './App.css';
import { createStore, combineReducers } from 'redux'

function reducer (state, action){
  console.log("Action parameters =>", action)
  if(action.type ==='changeTheState'){
    return action.payload.newState
  } else if  (action.type === 'deposit'){
    return action.payload
  }
  return 'State12346'
}

function userReducer (state="", action) {
  return 'state'
}
function productReducer (state=[], action) {
  return 'state'
}

const rootReducer = combineReducers({
  userReducer, productReducer
})

const myStore = createStore(rootReducer, {
  userReducer: "Tommy",
  productReducer: [
    {name: "Jane", lastName: "Jackson"}
  ]
})
//console.log('OLD State=>',myStore.getState())

const action = { type:'changeTheState', payload:{newState:"My new State..."}}
const actionDeposit = { type: 'deposit', payload: 10}
myStore.subscribe(()=>{
  //alert("Store has been updated")
})

myStore.dispatch(actionDeposit)
myStore.dispatch(action)

//console.log('NEW State=>',myStore.getState())

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}

export default App;
