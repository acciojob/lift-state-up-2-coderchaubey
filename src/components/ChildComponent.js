import React from 'react'

const ChildComponent = ({inputValue,setInputValue}) => {
  return (
    <div className="child">
    <h2>Child Component</h2>
    <input type="text" onChange={(e) => {
        setInputValue(e.target.value);
    }} value={inputValue} />
    </div>
  )
}

export default ChildComponent
