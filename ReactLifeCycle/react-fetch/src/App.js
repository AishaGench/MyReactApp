import './App.css';
import UserList from './UserList'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <h1> APP COMPONENT </h1>
     <Route path="/" exact strict render={()=>{return <h1>Welcome to Home Page</h1>}}/>
     <Route path="/Contact" exact strict render={()=>{return <h1>Contact Page</h1>}}/>
     <UserList/>
    </div>
    </BrowserRouter>
  );
}

export default App;
