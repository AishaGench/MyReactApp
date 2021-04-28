import './App.css';
import React, {useRef} from 'react'

function App() {
  const inputRef = useRef()
  const divRef = useRef()
  return (
    <div ref = {divRef} className="App">
      
    </div>
  );
}

export default App;
