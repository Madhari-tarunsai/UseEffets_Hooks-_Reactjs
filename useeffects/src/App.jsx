import React, { useState } from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  const handlerClick=(xyz)=>{
    if(xyz==="add"){
      setCount(perv=>perv+1)
    }
    else if(xyz==="reset"){
      setCount(0)
    }
    else if(xyz==="dec"){
      setCount(perv=>perv-1)
    }
    else{
      return;
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>handlerClick("add")}>Increment(+)</button>
      <button onClick={()=>handlerClick("reset")}>Reset(0)</button>
      <button onClick={()=>handlerClick("dec")}>decrement(-)</button>
    </div>
  )
}

export default App
