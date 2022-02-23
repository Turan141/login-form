import React, { useState } from 'react'


export default function Edit(){
  const [ element, setElement ] = useState('текст')
  const [ inputType, setType ] = useState('text')
  const setInput = () =>{
    setElement(<div/>)
    setType('text')
  }
  const setText = ()=>{
    setElement(<input />)
    setType('input')
  }
  return(
    <>
      <div>{element}</div>
      {inputType==='text' ?
        <button onClick={setText}>Edit</button>
        :
        <button onClick={setInput}>Confirm</button>}
    </>
  )
}
