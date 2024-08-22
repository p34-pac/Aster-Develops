/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setHeroContent } from '../../Redux/ReducersAction'

function Contact() {
    function handleSubmit(event){
        event.preventDefault()
    }
    const dispatch = useDispatch()
    useEffect(()=>{
        const main = "Let's Connect"
        const sub = "We’d love to hear from you."
        dispatch(setHeroContent({main, sub}))
    }, [])
  return (
    <section className="contact-form">
        <h1>Contact Me</h1>

        <form>
            <label htmlFor="name">
                Name
                <input type="text" id="name" placeholder="Your name" />
            </label>
            <label htmlFor="email">
                Email
                <input type="email" id="email" placeholder="email@example.com" />
            </label>
            <label htmlFor="message">
                Message
                <textarea type="text" id="message" placeholder="my name is ..."></textarea>
            </label>
            <button type="submit" id="submit" onClick={handleSubmit}>Send Message</button>
        </form>
    </section>
  )
}

export default Contact