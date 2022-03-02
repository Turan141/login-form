import React, { useState, useRef } from 'react'


const Section = ({ setInput, userList }) => {
  return(
    <>
      <Content setInput={setInput}/>
      <Content setInput={setInput}/>
      <Content setInput={setInput}/>
    </>
  )
}
const Content = ({ setInput, userList }) => {
  const [ textContent, setContent ] = useState('User')

  function setActive(){
    setContent(prompt())
    // setInput()
  }
  return(
    <div className='userDiv'>
      <div>{textContent}</div>
      <button onClick={setActive}>Edit</button>
    </div>
  )
}
function EditV2(){

  const [ isEditing, setEditing ] = useState(false)
  const setInput = () => {
    setEditing(!isEditing)
  }
  return(
    <>
      <div className="typeFieldMain">
        {isEditing ?
          <Form setInput={setInput}/>
          :
          <Section
            isEditing={isEditing}
            setInput={setInput}/>
        }
      </div>
    </>
  )
}
export { EditV2 }