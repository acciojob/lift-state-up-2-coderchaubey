import React,{useState} from 'react'
import Child from './Child';

function Parent() {
   const [inputValue,setInputValue]=useState('');
  return (
    <div className='Parent'>
      <h1>Parent Component</h1>
      <p>{inputValue}</p>
      <Child setInputValue={setInputValue} />
      
    </div>
  )
}

export default Parent
