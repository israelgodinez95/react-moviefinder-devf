import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer relative-bottom bg-light text-centerpy-6 my-4'>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'><NavLink href='/' className='nav-link px-2 text-muted'>Home</NavLink></li>
        <li className='nav-item'><NavLink href='/' className='nav-link px-2 text-muted'>Features</NavLink></li>
        <li className='nav-item'><NavLink href='/' className='nav-link px-2 text-muted'>Pricing</NavLink></li>
        <li className='nav-item'><NavLink href='/' className='nav-link px-2 text-muted'>FAQs</NavLink></li>
        <li className='nav-item'><NavLink href='/' className='nav-link px-2 text-muted'>About</NavLink></li>
      </ul>
      <p className='text-center text-muted'>IsraelGodinezBravo© 2023 Company, Inc</p>
    </footer>
  )
}

export default Footer
