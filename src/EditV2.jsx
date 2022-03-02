import React, { useState, useRef } from 'react'


const Content = ({ changeFn, textContent }) => {
  return(
    <>
      <div>{textContent}</div>
      <button onClick={changeFn}>Edit</button>
    </>
  )
}

const Form = ({ changeFn, setContent }) => {

  let inputRef = useRef()

  const applyChangefn = () => {
    setContent(inputRef.current.value)
    changeFn()
  }

  return(
    <>
      <input ref={inputRef}/>
      <button onClick={applyChangefn}>Save</button>
    </>
  )
}

function EditV2(){

  const [ isEditing, setEditing ] = useState(false)
  const [ textContent, setContent ] = useState('User')

  const setInput = () => {
    setEditing(!isEditing)
  }

  return(
    <>
      <div className="typeFieldMain">
        {isEditing ?
          <Form changeFn={setInput}
            textContent={textContent}
            setContent={setContent}/>
          :
          <Content textContent={textContent}
            changeFn={setInput}/>
        }
      </div>
    </>
  )
}


export { EditV2 }