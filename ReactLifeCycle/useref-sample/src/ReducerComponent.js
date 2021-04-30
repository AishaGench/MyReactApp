import React, { useState, useReducer } from 'react'

const myInitialState = {data: "", loading: "", error: ""}

const reducer =(state, action) =>{
    switch (action.type) {
        case "FETCH_START": return{...state, data:"", loading: true, error:""}
        case "FETCH_SUCCESS": return {...state, data:action.payload,loading:false, error:""};
        case "FETCH_ERROR": return {...state, loading:false, error:action.payload};
    
        default: return state;
            
    }
}

function ReducerComponent() {
    // const [data, setData] = useState("")
    // const [loading, setLoad] = useState(false)
    // const [error, setError] = useState("")

    const [state, dispatch] = useReducer(reducer, myInitialState)

    const fetchingDog = () =>{
        // setLoad("")
        // setError("")
        // setData("")
        dispatch({type:"FETCH_START"})
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res =>res.json())
        .then(result => {
            // setLoad(false); 
            // setData(result.message)
            dispatch({type:"FETCH_SUCCESS", payload:result.message})
        })
        .catch(() => {
            // setError("Error in fetching data...")
            dispatch({type:"FETCH_ERROR", payload:"Error in fetching data..."})

        })
    }

    return (
        <div>
            <button onClick = {fetchingDog} disabled={state.loading}>Fetch Dog </button>
            {state.data && <div><img src= {state.data} alt= "Random Dog" /></div>}
            {state.error && <p>{state.error}</p>}
        </div>
    )
}

export default ReducerComponent
