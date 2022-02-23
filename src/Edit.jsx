import React, { useState } from 'react'


const Content = (props) => {
  return(
    <>
      <div>Plain Text</div>
      <button onClick={props.setInput}>Save</button>
    </>
  )
}

const Form = (props) => {
  return(
    <>
      <input/>
      <button onClick={()=>{props.setInput}}>Edit</button>
    </>
  )
}

function Edit(){
  const [ isEditing, setEditing ] = useState(false)

  const setInput = () => {
    console.log('true')
    setEditing(isEditing => !isEditing)
  }

  return(
    <>
      <div className="typeFieldMain">
        {isEditing ?
          <Form type={setInput}/>
          :
          <Content type={setInput}/>}
      </div>
    </>
  )
}


export { Edit, Content, Form }