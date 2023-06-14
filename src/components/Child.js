import React from 'react'

const Child = ({inputValue,setInputValue}) => {
  return (
    <div className='child'>
        <h1>Child Component</h1>
      <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/>
    </div>
  )
}

export default Child
