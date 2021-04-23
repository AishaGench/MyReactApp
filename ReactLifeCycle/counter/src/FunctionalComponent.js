import React, {useState} from 'react'

export default function FunctionalComponent() {
  const [counter, setCounter] = useState(0)
  console.log("Functional Component => ", counter)
  const increase = () => {
    setCounter(counter+1)
  }
  const reset = () => {
    setCounter(0)
  }
  const decrease = () => {
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{counter}</h2>
      <button onClick={increase}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}