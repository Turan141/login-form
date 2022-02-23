import React, { useState, useRef } from 'react'


const Section = ({ text, changeFn }) => {
  return(
    <>
      <Content text={text} changeFn={changeFn}/>
      <Content text={text} changeFn={changeFn}/>
      <Content text={text} changeFn={changeFn}/>
    </>
  )
}


const Content = ({ changeFn, text }) => {
  return(
    <>
      <div>{text}</div>
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

function Edit(){

  const [ isEditing, setEditing ] = useState(false)
  const [ textContent, setContent ] = useState('plain text')

  const setInput = () => {
    setEditing(!isEditing)
  }

  return(
    <>
      <div className="typeFieldMain">
        {isEditing ?
          <Form changeFn={setInput}
            text={textContent}
            setContent={setContent}/>
          :
          <Section text={textContent}
            changeFn={setInput}/>
        }
      </div>
    </>
  )
}


export { Edit }