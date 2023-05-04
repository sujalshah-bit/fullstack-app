import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
const Nav = () => {
 const [toggle, setToggle] = useState(false)
  return (
    <>

    
    <nav >
        <div className="logo"> 
            Navbar
        </div>
        <ul className='navlinks'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Registration</li>
        </ul>
        <div className='bar'>
            <FaBars onClick={()=>setToggle(!toggle)} />
        </div>
    </nav>
    <div className={toggle ? 'unhide navlink_mob' : 'hide navlink_mob'}>
        <ul>
        <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Registration</li>
        </ul>
    </div>
    </>
  )
}

export default Nav