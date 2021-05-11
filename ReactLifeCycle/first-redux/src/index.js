import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux'
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer'

function reducer (state, action){
  console.log("Action parameters =>", action)
  if(action.type ==='changeTheState'){
    return action.payload.newState
  } else if  (action.type === 'deposit'){
    return action.payload
  }
  return 'State12346'
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
//console.log('OLD State=>',myStore.getState())

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


