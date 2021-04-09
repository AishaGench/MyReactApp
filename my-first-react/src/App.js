import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'

const User  = {
    name: 'Aysegul',
    lastName:'Genc',
    age:40,
    email:'agenc@email.com',
    isActive:true
}
if(User.isActive){
    <p>How are you? {User.name} </p>
}else{
    <p>How are you? Guest</p> 
}

function App() {
  return (
    <>
    {/* <Blog/> */}
    <hr/>
    <Counter></Counter>
    <Counter2></Counter2>
    {/* <Blog/>
    <Blog/>
    <Blog/> */}
{/* 
      <h1 id="title">USER INFO</h1>
    <h2>Name: {User.name}</h2>
    <h2>LastName: {User.lastName}</h2>
    <h2>Age: {User.age}</h2>
    <h2>Email: {User.email}</h2>
    <p>How are you?</p>
    {User.isActive ? <p>How are you? {User.name} </p> : <p>How are you? Guest</p>}
    <img src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" alt="img" width="80%"/>
 */}
    </>
  );
}

export default App;