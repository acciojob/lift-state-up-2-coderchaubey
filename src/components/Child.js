import React from 'react'

const Child = ({setInputValue}) => {
  return (
    <div className='Child'>
        <h1>Child Component</h1>
      <input type="text" onChange={(event)=>setInputValue(event.target.value)}/>
    </div>
  )
}

export default Child