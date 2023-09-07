import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import "./Header.css"
const Header = () => {
  const [Nav, setNav] = useState(true)
  const toggleNav = () => setNav(!Nav)
  console.log(Nav);
  return (
    <>
      <div className="navigation">
        <h3 className="logo">Emerie<span>X</span></h3>
        <ul className={!Nav ? "navLinks": "navClose"}>
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Contact</p>
        </ul>
        <div className="hamburger" onClick={toggleNav}>{!Nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
      </div>
    </>
  )
}

export default Header