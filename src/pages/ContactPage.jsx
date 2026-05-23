import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactPage() {
    const formClass = 'border border-gray-300 rounded p-2 my-1 ml-2 mr-7'
    const [contact, setContact] =  useState({
        name: '',
        email: '',
        message: ''
    });
    const [messages, setMessages] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        setMessages([...messages, contact]);
        setContact({name: '', email: '', message: ''})

        console.log(messages)
    };


    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-grow'>
                <h1 className='m-2 text-xl'>Contactanos</h1>
                <form className='flex flex-col gap-2' onSubmit={submitForm}>
                    <input 
                        placeholder='name'
                        className={formClass}
                        value={contact.name}
                        onChange={(e) => setContact({...contact, name: e.target.value})}
                    />
                    <input
                        placeholder='email'
                        className={formClass}
                        value={contact.email}
                        onChange={(e) => setContact({...contact, email: e.target.value})}
                    />
                    <textarea
                        placeholder='message'
                        className={formClass}
                        value={contact.message}
                        onChange={(e) => setContact({...contact, message: e.target.value})}
                    />

                    <button
                        type='submit'
                        className='m-2 w-fit px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-full shadow-xs transition-all font-sans tracking-wide antialiased'
                    >Submit
                    </button>
                </form>

                <div className="m-2 pt-4 flex justify-center md:justify-start">
                    <a 
                        href="https://www.instagram.com/encuentrofamiliagarzon/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-emerald-50/60 hover:bg-white text-emerald-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-sm font-medium rounded-full border border-emerald-100/80 hover:border-pink-300 shadow-xs hover:shadow-md transition-all duration-300 font-sans tracking-wide antialiased group"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="w-4 h-4 text-emerald-700 group-hover:text-[#ee2a7b] transition-colors duration-300"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
            
                            <span>Ver Fotos en Instagram</span>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
        
  )
}

export default ContactPage