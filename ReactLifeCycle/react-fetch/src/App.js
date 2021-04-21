import UserList from "./UserList";
import About from './About';
import "./App.css";
import Error from "./Error"
import { BrowserRouter, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import React, {Component} from 'react';


const UserInfo = (dataFromRoute) =>{
  console.log(dataFromRoute)
  return <h1>User Information: {dataFromRoute.match.params.name}</h1>
}
const Profile = (dataFromRoute) =>{
  console.log(dataFromRoute)
  return <h1>Welcome Profile Page</h1>
}

class App extends Component {
  state={loggedIn:false}

  onClickButton = () =>{
    this.setState({loggedIn: !this.state.loggedIn})
    console.log(this.state.loggedIn)
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <h1>APP Component</h1>
          <Link to="/">Home</Link><br/>
          <Link to="/Contact">Contact</Link><br/>
          <Link to="/AboutPage">About</Link><br/>
          <Link to="/AboutPage/1">About 1</Link><br/>
          <Link to="/UserInfo">User Info</Link><br/>
          {/* <NavLink activeStyle={{color:"red"}} to="/AboutPage/22">About 22</NavLink><br/>
          <NavLink activeStyle={{color:"red"}} to="/AboutPage/33/33">About 333</NavLink> */}
          <NavLink activeClassName="activeClass" to="/AboutPage/22">About 22</NavLink><br/>
          <NavLink activeClassName="activeClass" to="/AboutPage/33/33">About 333</NavLink><br/>
          <NavLink activeClassName="activeClass" to="/Profile">Profile</NavLink><br/>
          <input type="button" onClick={this.onClickButton} value={this.state.loggedIn ? "Logout":"Login"}/>
          <Switch>
            <Route path="/" exact strict render={()=>{return <h1>Welcome to Home Page </h1>}}/>
            <Route path="/Contact" exact strict render={()=>{return <h1>Contact Page </h1>}}/>
            <Route path="/AboutPage" exact strict component={About}/>
            <Route path="/AboutPage/:id" exact strict component={About}/>
            <Route path="/AboutPage/:name/:age" exact  component={About}/>
            <Route path="/Users" exact strict component={UserList}/>
            <Route path="/User2" exact strict> <UserList/></Route>
            <Route path="/UserInfo/:name" exact strict component={UserInfo}/> 
            {/* <Route path="/Profile" exact strict component={Profile}/>  */}
            <Route path="/Profile" exact strict render={()=>{
              return this.state.loggedIn ? <Profile /> : <Redirect to="/"/>
            }}/> 
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;