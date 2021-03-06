import React, {useState, useEffect} from 'react'

export default function FunctionalComponent() {
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(true)
  const [timer, setTimer] = useState(0)
  //console.log("Functional Component => ", counter)
  const increase = () => {
    setCounter(counter+1)
  }
  const reset = () => {
    setCounter(0)
  }
  const decrease = () => {
    setCounter(counter-1)
  }
  const changeLoad = () => {
    setLoading(!loading)
    console.log(loading)
  }

  useEffect(
    ()=>{console.log('Func.=>useEffect')}, [loading, counter]
  )
  //useEffect(()=>{},[])---> componentDidMount
  useEffect(()=>{
    const myTimer = setInterval(() => {
      setTimer(timer => timer+1)
    }, 1000);
    return ()=>clearInterval(myTimer)
  },[])

  //useEffect(()=>{})---> componentDidMount + componentDidUpdate
  useEffect(()=>{
    console.log('Func. Timer: ',timer )
  })

  //useEffect(()=>{ return()=>clearInterval(myTimer)},[])
  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{counter}</h2>
      <button onClick={increase}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={decrease}>-</button>
      <button onClick={changeLoad}>Load</button>
    </div>
  )
}
