import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import { useState } from 'react'

function App() {
  const divStyle = {width:"50%", float:"left", height:"100vh"}
  const bgLeft = { backgroundColor: "#e8cebf"}
  const [showComponentC, setShowComponentC] = useState(true)
  const [showComponentF, setShowComponentF] = useState(true)
  return (
    <div className="App">
      <h1>{showComponentC ? "Class Component ON" :"Class Component OFF"}
      {showComponentF ? "Functional Component ON" :"Functional Component OFF"}</h1>
      <button onClick ={()=>setShowComponentC(!showComponentC)}>Class Component Toggle</button>
      <button onClick ={()=>setShowComponentF(!showComponentF)}>Functional Component Toggle</button><br/>
      {showComponentC ? <div style={{...divStyle, ...bgLeft}}><ClassComponent /></div>:""}
      {showComponentF ? <div style={divStyle}><FunctionalComponent /></div> :""}
    </div>
  );
}

export default App;