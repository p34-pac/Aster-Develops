/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './Textarea.css'

function Textarea(props) {
  const [value, setValue] = useState("")
  const textbox = useRef()

  function handleChangeValue(event){
    setValue(event.target.outerText);
    let element = {
      componentName: "Textarea",
      componentClass: props.className,
      componentId: props.id,
      value: event.target.outerText,
      ...props

    }
    try {
      props.onChange(element)
    } catch (error) {
      return
    }
  }

  

  return (
    <div className={props.className?"textarea "+props.className:"textarea"}>
        <header>
            <b className="title" >{props.title?props.title:"Title"}</b>
        </header>
        {props.children}
        <div ref={textbox} className="textbox" contentEditable onKeyUp={handleChangeValue}>
          
        </div>
        
        
    </div>
  )
}

export default Textarea