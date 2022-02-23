import React, { useState, useRef } from 'react'


const Content = ( { changeFn, text } ) => {
  return(
    <>
      <div>{text}</div>
      <button onClick={changeFn}>Save</button>
    </>
  )
}

const Form = ( { changeFn,inputRef,setContent } ) => {

  const applyChangefn = () => {
    setContent(inputRef.current.value)
    changeFn()
  }

  return(
    <>
      <input ref={inputRef}/>
      <button onClick={applyChangefn}>Edit</button>
    </>
  )
}

function Edit(){
  const [ isEditing, setEditing ] = useState(false)
  const [ textContent, setContent ] = useState('plain text')

  let inputRef = useRef()

  const setInput = () => {
    setEditing(!isEditing)
  }


  return(
    <>
      <div className="typeFieldMain">
        {isEditing ?
          <Form changeFn={setInput}
            text={textContent}
            inputRef={inputRef}
            setContent={setContent}/>
          :
          <Content changeFn={setInput}
            text={textContent}/>}
      </div>
    </>
  )
}


export { Edit, Content, Form }