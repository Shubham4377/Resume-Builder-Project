// src/HelpSupport.js
import React, { useState } from 'react';


const faqs = [
  {
    question: 'How can I reset my password?',
    answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email.'
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can contact customer support by filling out the contact form below or calling us at 1-800-123-4567.'
  },
  {
    question: 'Where can I find the user manual?',
    answer: 'The user manual is available in the "Help" section of our website. You can also download it directly from this page.'
  }
];

export default function HelpSupport() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="help-support-container">
      <h2>Help & Support</h2>
      
      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="contact-section">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
