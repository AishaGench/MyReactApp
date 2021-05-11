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
  switch (action.type) {
    case "userUpdate": return action.payload.user;
    default:  return 'state'
  }
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
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log('OLD State=>',myStore.getState())

const action = { type:'changeTheState', payload:{newState:"My new State..."}}
const actionDeposit = { type: 'deposit', payload: 10}
const actionUser ={type: "userUpdate", payload:{user:'Emma'}}
myStore.dispatch(actionUser)
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
