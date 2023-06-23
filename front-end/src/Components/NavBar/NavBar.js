import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <img className='netflix-logo' src="logo.jpg" alt="Netflix-logo" />
        <ul className="ul">
          <li className="lists">HOME</li>
          <li className="lists">TRENDING</li>
          <li className="lists">CART</li>
          <li className="lists">PROFILE</li>
        </ul>
        <img className='avathar' src="avathar.jpg" alt="avathar" />
    </div>
  )
}

export default NavBar