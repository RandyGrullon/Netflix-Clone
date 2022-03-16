import React from 'react'
import "../style/Nav.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
            <ul className="nav-list">
            <li className="nav-items">
              <Link className="nav-text" to="/">Home</Link>
            </li>

            <li className="nav-items">
              <Link className="nav-text" to="/Series">TV Shows</Link>
            </li>

            <li className="nav-items">
              <Link className="nav-text" to="/Movies">Movies</Link>
            </li>

            <li className="nav-items">
              <Link className="nav-text" to="/Popular">New & Popular</Link>
            </li>

            <li className="nav-items">
              <Link className="nav-text" to="/MyList">My List</Link>
            </li>
        </ul>
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

export default NavBar


