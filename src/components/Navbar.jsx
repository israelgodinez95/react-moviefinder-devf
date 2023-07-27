import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between px-4'>
        <NavLink className='navbar-brand' to='/'>MovieFinder</NavLink>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample02' aria-controls='navbarsExample02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample02'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item px-2 active'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
            <li className='nav-item px-2'>
              <NavLink className='nav-link' to='/about'>Acerca de</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
