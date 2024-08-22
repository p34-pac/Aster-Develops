/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Contact.css';
import { useDispatch } from 'react-redux';
import { setHeroContent } from '../../Redux/ReducersAction';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const main = "Let's Connect";
    const sub = "We’d love to hear from you.";
    dispatch(setHeroContent({ main, sub }));
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const subject = encodeURIComponent(`Request for Services: ${name} - Potential Client Inquiry`);
    const body = encodeURIComponent(`
        Dear [Your Name],
        
        I hope this message finds you well.
        
        I am reaching out to inquire about your services and discuss a potential collaboration. Below are my details:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        I am interested in understanding how your expertise can help with [specific project or need, if applicable]. Please let me know your availability for a brief discussion or if you require additional information.
        
        Thank you for your time and consideration. I look forward to your response.
        
        Best regards,
        ${name}
        `);
    const mailtoLink = `mailto:peterpaultolulope@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-form">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            placeholder="my name is ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button type="submit" id="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
