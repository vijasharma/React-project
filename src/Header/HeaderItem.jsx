import React from 'react'
import "./index.css"
import { Link } from "react-router-dom";
function HeaderItem() {
  return (
    <div>
        <header className='header'>
        <Link to="/"> <h1>Home</h1></Link>
        <Link to="/about"> <h1>About</h1></Link>
        <Link to="/service"> <h1>Service</h1></Link>
        <Link to="/contact"> <h1>Contact</h1></Link>
     </header>
    </div>
  )
}

export default HeaderItem
