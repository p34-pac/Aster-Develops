/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import NavBtn from '../NavBtn/NavBtn'
import { useNavigate } from 'react-router-dom'

export function getRand(to, from = 0){
  let rand = Math.floor((Math.random()*to)+from)
  return rand
}

function Hero({main, sub, cta, extra1, extra2}) {
  const navigate = useNavigate()

  return (
    <section className="hero">
      
        <div className="hero_cont">
            <h1 className="main-text">{main}</h1>
            <b className="sub-text">{sub}</b>
            <b className="sub-text">{extra1}</b>
            <b className="sub-text">{extra1}</b>
            {
              cta&&<div className="cta">
              
              <NavBtn navigate={()=> navigate(cta.navTo)} text={cta.text}/>
            </div>
            }
            
        </div>
    </section>
  )
}

export default Hero