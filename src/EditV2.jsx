import React, { useState, useRef } from 'react'


const Section = ({ setInput, userList }) => {
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
  return(
    <div className='userDiv'>
      <div>{textContent}</div>
      <button onClick={()=>{setContent(prompt('Введите имя пользовтеля'))}}>Edit</button>
    </div>
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