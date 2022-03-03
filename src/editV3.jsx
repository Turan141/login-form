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

const Parrent1 = () => {
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
const Parrent2 = () => {
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
const Parrent3 = () => {
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

function EditV3(){
  return(
    <>
      <Parrent1/>
      <Parrent2/>
      <Parrent3/>
    </>
  )
}


export { EditV3 }