/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Modal.css'

function Modal( props) {
  return (
    <div className={'Modal '+ props.className}>
        <div className="modalBox">
            <div className="header">
                <b>{props.title}</b>
                <span id='remove' onClick={()=>{
                    props.removeModal()
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>close modal</title>
                        <rect width="24" height="24" fill="none"/>
                        <line x1="1.41421" y1="1" x2="23" y2="22.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="1" y1="22.5858" x2="22.5858" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </span>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default Modal