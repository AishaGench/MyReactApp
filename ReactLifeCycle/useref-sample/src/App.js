import './App.css';
import React, {useRef} from 'react'

function App() {
  const inputRef = useRef()
  const divRef = useRef()
  const onFocusBtn = () =>{inputRef.current.focus();}
  const onDivBorderBtn = () =>{divRef.current.style.border = '2px red solid'}
  const onViewInputValueBtn = () =>{alert (inputRef.current.value)}
  console.log('inputRef =>', inputRef)
  console.log('inputRef.current =>', inputRef.current)
  return (
    <div ref = {divRef} className="App">
      <h1> Welcome </h1>
      <input ref = {inputRef} placeholder='Enter a text...'/>
      <button onClick={onFocusBtn}>Focus on Button</button>
      <button onClick={onDivBorderBtn}>Div Border Button</button>
      <button onClick={onViewInputValueBtn}>View Input Value</button>
    </div>
  );
}
export default App;
