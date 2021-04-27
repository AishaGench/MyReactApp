import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import { useState } from 'react'

function App() {
  const divStyle = {width:"50%", float:"left", height:"100vh"}
  const bgLeft = { backgroundColor: "#e8cebf"}
  const [showComponent, setShowComponent] = useState(true)
  return (
    <div className="App">
      <h1>{showComponent ? "Component ON" :"Component OFF"}</h1>
      <button onClick ={()=>setShowComponent(!showComponent)}>Component Toggle</button><br/>
      {showComponent ? <div style={{...divStyle, ...bgLeft}}><ClassComponent /></div>:""}
      <div style={divStyle}><FunctionalComponent /></div>
    </div>
  );
}

export default App;