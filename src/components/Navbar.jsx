const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between px-4'>
        <a className='navbar-brand' href='#'>MovieFinder</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample02' aria-controls='navbarsExample02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample02'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item px-2 active'>
              <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item px-2'>
              <a className='nav-link' href='#'>Link</a>
            </li>
          </ul>
          <form className='form-inline my-2 my-md-0'>
            <input className='form-control' type='text' placeholder='Search' />
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
