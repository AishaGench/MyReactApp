import React, { useState } from 'react'

function ReducerComponent() {
    const [data, setData] = useState("")
    const [loading, setLoad] = useState(false)
    const [error, setError] = useState("")

    const fetchingDog = () =>{
        setLoad("")
        setError("")
        setData("")

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res =>res.json())
        .then(result => {setLoad(false); setData(result.message)})
        .catch(() => {setError("Error in fetching data...")})
    }
    
    return (
        <div>
            
        </div>
    )
}

export default ReducerComponent
