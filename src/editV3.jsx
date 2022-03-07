import React, { useState, useRef } from 'react'


const Content = ({ changeFn, textContent }) => {
  return (
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

  return (
    <>
      <input ref={inputRef} />
      <button onClick={applyChangefn}>Save</button>
    </>
  )
}

// const Parrent1 = () => {
//   const [ isEditing, setEditing ] = useState(false)
//   const [ textContent, setContent ] = useState('Valkyrie')

//   const setInput = () => {
//     setEditing(!isEditing)
//   }

//   return (
//     <>
//       <div className="typeFieldMain">
//         {isEditing ? (
//           <Form
//             changeFn={setInput}
//             textContent={textContent}
//             setContent={setContent}
//           />
//         ) : (
//           <Content textContent={textContent} changeFn={setInput} />
//         )}
//       </div>
//     </>
//   )
// }
// const Parrent2 = () => {
//   const [ isEditing, setEditing ] = useState(false)
//   const [ textContent, setContent ] = useState('Knight')

//   const setInput = () => {
//     setEditing(!isEditing)
//   }

//   return (
//     <>
//       <div className="typeFieldMain">
//         {isEditing ? (
//           <Form
//             changeFn={setInput}
//             textContent={textContent}
//             setContent={setContent}
//           />
//         ) : (
//           <Content textContent={textContent} changeFn={setInput} />
//         )}
//       </div>
//     </>
//   )
// }
// const Parrent3 = () => {
//   const [ isEditing, setEditing ] = useState(false)
//   const [ textContent, setContent ] = useState('Witch')

//   const setInput = () => {
//     setEditing(!isEditing)
//   }

//   return (
//     <>
//       <div className="typeFieldMain">
//         {isEditing ? (
//           <Form
//             changeFn={setInput}
//             textContent={textContent}
//             setContent={setContent}
//           />
//         ) : (
//           <Content textContent={textContent} changeFn={setInput} />
//         )}
//       </div>
//     </>
//   )
// }

const Element=({ textContent, isEditing, setEditing, setContent })=>{
  const setInput = () => {
    setEditing(!isEditing)
  }
  return(
    <>
      <div className="typeFieldMain">
        {isEditing ? (
          <Form
            changeFn={setInput}
            textContent={textContent}
            setContent={setContent}
          />
        ) : (
          <Content textContent={textContent} changeFn={setInput} />
        )}
      </div>
    </>
  )
}

const Parrent = () => {
  const [ textContent1, setContent1 ] = useState('Witch')
  const [ textContent2, setContent2 ] = useState('Knight')
  const [ textContent3, setContent3 ] = useState('Valkyirie')
  const [ isEditing1, setEditing1 ] = useState(false)
  const [ isEditing2, setEditing2 ] = useState(false)
  const [ isEditing3, setEditing3 ] = useState(false)


  return (
    <>
      <Element textContent={textContent1} setContent={setContent1} isEditing={isEditing1} setEditing={setEditing1}/>
      <Element textContent={textContent2} setContent={setContent2} isEditing={isEditing2} setEditing={setEditing2}/>
      <Element textContent={textContent3} setContent={setContent3} isEditing={isEditing3} setEditing={setEditing3}/>
    </>
  )
}

function EditV3() {
  return (
    <>
      {/* <Parrent1 />
      <Parrent2 />
      <Parrent3 /> */}
      <Parrent />
    </>
  )
}

export { EditV3 }
