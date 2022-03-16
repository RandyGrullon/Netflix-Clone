import React from 'react'
import "../style/Nav.css"

const NavBar = () => {
  return (
    <div className="navbar-container">
        <img 
        className='navBar-Logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"/>

        <img 
        className='Navbar-Avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
        alt='Netflix vatar'
        />
    </div>
  )
}

export default NavBar;


