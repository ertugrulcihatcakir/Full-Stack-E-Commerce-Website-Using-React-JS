import React from 'react'
import './Navbar.css'
import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={navLogo} alt="" className="navLogo" />
        <img src={navProfile} alt="" className='navProfile'/>
    </div>
  )
}

export default Navbar