import React, { useState, useRef, useContext, createContext } from 'react'


const MyContext = createContext('without context')

const Section = () => {
  const { value, value1, value2 } = React.useContext(MyContext)
  const [ stateValue, setValue ] = value
  const [ stateValue1, setValue1 ] = value1
  const [ stateValue2, setValue2 ] = value2

  return(
    <>
      <Content stateHandler={ 1 } text={ stateValue }/>
      <Content stateHandler={ 2 } text={ stateValue1 }/>
      <Content stateHandler={ 3 } text={ stateValue2 }/>
    </>
  )
}

const Content = ({ text, stateHandler }) => {
  const { setInputFn, handler } = React.useContext(MyContext)
  const [ editorHandler, setEditorHandler ] = handler
  function changeStateFn(){
    setEditorHandler(stateHandler)
    setInputFn()
  }
  return(
    <>
      <div>{text}</div>
      <button onClick={ changeStateFn }>Edit</button>
    </>
  )
}
const Form = () => {
  const {  setInputFn, handler, value, value1, value2 } = React.useContext(MyContext)
  const [ stateValue, setValue ] = value
  const [ stateValue1, setValue1 ] = value1
  const [ stateValue2, setValue2 ] = value2
  const [ editorHandler, setEditorHandler ] = handler
  let inputRef = useRef()

  function setNewNameFn(){
    switch(editorHandler){
      case 1:
        setValue(inputRef.current.value)
        break
      case 2:
        setValue1(inputRef.current.value)
        break
      case 3:
        setValue2(inputRef.current.value)
        break
      default: console.log('error')
    }
    setInputFn()
  }
  return(
    <>
      <input ref={inputRef}/>
      <button onClick={setNewNameFn}>Save</button>
    </>
  )
}
function Edit(){
  const [ isEditing, setEditing ] = useState(false)
  const [ textContent, setContent ] = useState('plain text')
  const [ textContent1, setContent1 ] = useState('plain text1')
  const [ textContent2, setContent2 ] = useState('plain text2')
  const [ editorHandler, setEditorHandler ] = useState(null)
  const setInput = () => {
    setEditing(!isEditing)
  }
  return(
    <>
      <MyContext.Provider value={{
        value: [ textContent, setContent ],
        value1: [ textContent1, setContent1 ],
        value2: [ textContent2, setContent2 ],
        handler: [ editorHandler, setEditorHandler ],
        handleEditing: [ isEditing, setEditing ],
        setInputFn: setInput }}>
        <div className="typeFieldMain">
          {isEditing ?
            <Form/>
            :
            <Section/>
          }
        </div>
      </MyContext.Provider>
    </>
  )
}


export { Edit }