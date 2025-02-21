import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className='w-[100%] bg-black text-white p-5 space-x-4 text-3xl'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/addpost">Addpost</Link>
        <Link to="/viewpost">viewpost</Link>
        <Link to="/register">register</Link>
        <Link to="/login">Login</Link>
    </nav>
    </div>
  )
}

export default Header
