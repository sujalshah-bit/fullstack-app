import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Nav = () => {
 const [toggle, setToggle] = useState(false)
  return (
    <>

    
    <nav >
        <div className="logo"> 
            Navbar
        </div>
        <ul className='navlinks'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/signup'}>Registration</Link></li>
        </ul>
        <div className='bar'>
            <FaBars onClick={()=>setToggle(!toggle)} />
        </div>
    </nav>
    <div className={toggle ? 'unhide navlink_mob' : 'hide navlink_mob'}>
        <ul>
        <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/signup'}>Registration</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Nav