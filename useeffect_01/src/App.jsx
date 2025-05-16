import React, { useEffect, useState } from 'react'

const App = () => {
  const[state,setState]=useState(0)
  const handlerClick=()=>{
        setState(perv=>perv+1)
  }
  useEffect(()=>{
    alert('HII WELCOME TO MOUNT STAGE')

  },[])
    useEffect(()=>{
    alert('HII WELCOME TO MOUNT STAGE2')

  },[])
  
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handlerClick}>click me</button>
    </div>
  )
}

export default App
