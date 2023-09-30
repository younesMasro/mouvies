import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
    <header className="header">
   
      <div className="button-container">
      <Link to="/" className="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          strokeWidth="0"
          fill="currentColor"
          stroke="currentColor"
          className="icon"
        >
          <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
        </svg>
        
      </Link>
      <Link to="/add" className="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          aria-hidden="true"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
          className="icon"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round" strokeLinecap="round"></path>
        </svg>
      </Link>
      <Link to="/watched" className="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="29px" fill="none" stroke-width="1.8" viewBox="0 0 24 24" color="#383838"><path stroke="#383838" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path></svg>      
      </Link>

      <Link to="/seen" className="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" fill="none" stroke-width="1.8" viewBox="0 0 24 24" color="#383838"><path stroke="#383838" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path stroke="#383838" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6Z"></path></svg>
      </Link>
    </div>


    </header>
    </>
  )
}
