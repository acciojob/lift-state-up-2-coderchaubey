import React from 'react'

function Child({setInputValue}) {
  return (
    <div>
        <h1>Child Component</h1>
      <input type="text" onChange={(event)=>setInputValue(event.target.value)}/>
    </div>
  )
}

export default Child
