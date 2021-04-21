import './App.css';
import About from './About'
import UserList from './UserList'
import {BrowserRouter, Route,Link,NavLink} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <h1> APP COMPONENT </h1>
     <Link to="/">Home</Link><br/>
     <Link to="/Contact">Contact</Link><br/>
     <Link to="/AboutPage">About</Link><br/>
     <Link to="/AboutPage/1">About 1</Link><br/>
    {/* <NavLink activeStyle={{color:"red"}} to="/AboutPage/22">About 22</NavLink><br/>
        <NavLink activeStyle={{color:"red"}} to="/AboutPage/33/33">About 333</NavLink> */}
     <NavLink activeClassName="activeClass" to="/AboutPage/22">About 22</NavLink><br/>
     <NavLink activeClassName="activeClass" to="/AboutPage/33/33">About 333</NavLink>
     <Route path="/" exact strict render={()=>{return <h1>Welcome to Home Page </h1>}}/>
        <Route path="/Contact" exact strict render={()=>{return <h1>Contact Page </h1>}}/>
        <Route path="/AboutPage" exact strict component={About}/>
        <Route path="/AboutPage/:id" exact strict component={About}/>
        <Route path="/AboutPage/:name/:age" exact  component={About}/>
        <Route path="/Users" exact strict component={UserList}/>
        <Route path="/User2" exact strict> <UserList/></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
