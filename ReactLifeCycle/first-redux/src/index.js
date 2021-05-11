import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux'
import { createStore } from 'redux'
import userReducer from './reducers/userReducer'
import productReducer from './reducers/productReducer'
import rootReducer from './reducers/rootReducer'

function reducer (state, action){
  console.log("Action parameters =>", action)
  if(action.type ==='changeTheState'){
    return action.payload.newState
  } else if  (action.type === 'deposit'){
    return action.payload
  }
  return 'State12346'
}



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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
