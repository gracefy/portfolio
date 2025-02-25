import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'from_name') {
      setName(value);
    } else if (name === 'from_email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }

  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cvhlxm4', 'template_8xqbuj4', form.current, {
        publicKey: 'XGjnyD6WvZmc3vsUO',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>
      <p className='text-lime-600 py-3'>{success}</p>
      <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input
          name='from_name'
          type="text"
          placeholder='Your Name'
          className='h-12 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-gray-200 px-2'
          value={name}
          onChange={handleChange}
          required
        />
        <input
          name='from_email'
          type="email"
          placeholder='Your Email'
          className='h-12 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-gray-200 px-2'
          value={email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          type="text"
          placeholder="Message"
          id=""
          cols="50"
          rows="9"
          className='rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-gray-200 p-2'
          value={message}
          onChange={handleChange}
          required
        />
        <button type="submit"
          className='w-full rounded-lg border border-lime-600 h-12 font-bold text-xl bg-gray-50 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-lime-300 transition-all duration-500'>
          Send
        </button>

      </form>
    </div>
  )
}

export default ContactForm