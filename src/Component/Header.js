import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Add from './Header.css'

export default function Header() {
  return (
    <>
    <header className="header">
      <div className="logo">
        <Link to='/'>Movies</Link>
        
      </div>
      <nav>
        <ul>
          <li><Link to="/">Watchlist</Link></li>
          <li><Link to="/watched">Watched</Link></li>
        </ul>
      </nav>
      <Link className="add-button" to='/add' >Add</Link>
    </header>
    </>
  )
}
