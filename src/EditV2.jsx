import React, { useState, useRef } from 'react'


const Section = () => {
  return(
    <>
      <Content/>
      <Content/>
      <Content/>
    </>
  )
}
const Content = () => {
  const [ textContent, setContent ] = useState('User')
  const [ isEdit, setEdit ] = useState(false)
  const [ isDisabled, setDisabled ] = useState(false)
  const UserNameShow = ({ textContent }) => {
    return(
      <div className='userDiv'>
        <div>{textContent}</div>
        <button onClick={function setterFn(){setEdit(true) }}>Edit</button>
      </div>
    )
  }

  const EditNameShow = ({ setEdit, setContent }) => {
    const confirmName = () => {
      let name = document.querySelector('.input')
      setContent(name.value)
      setEdit(false)
    }
    return(
      <>
        <input className="input"/><button onClick={confirmName}>Confirm</button>
      </>
    )
  }

  return(
    <>
      {!isEdit ? <UserNameShow textContent={textContent}/> : <EditNameShow setContent={setContent} setEdit={setEdit}/>}
    </>
  )
}


function EditV2(){
  return(
    <>
      <div className="typeFieldMain">
        <Section/>
      </div>
    </>
  )
}
export { EditV2 }