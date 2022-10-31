import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/schoolhacks-logo.png";

const Header = () => {
  return (
    <header className="container">
    <Link to="/">
    <img
        className="logo"
        src={logo}
        alt="SchoolHacks logo"
        title="SchoolHacks | Home"
    />
    </Link>
    <nav>
        
        <Link to={"/"}>Home</Link>
        <Link to={"/workshops"}>Workshop</Link>
        <Link to={"/about"}>About</Link>
    </nav>
</header>
  )
}

export default Header
