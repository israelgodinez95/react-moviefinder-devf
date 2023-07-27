import React, { useState, useEffect } from 'react'
import Show from '../components/Show'
const Home = () => {
  const [shows, setShows] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(error => console.error(error))
  }
  , [search])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (

    <>
      <div id='home-div' className='container'>
        <h1>Home</h1>
        <form className='form-inline my-2 w-800'>
          <input
            type='text'
            className='form-control'
            placeholder='Search TV show'
            value={search}
            onChange={handleSearch}
          />
        </form>
        <div className='row'>
          {shows.map(show => (
            <Show
              key={show.show.id}
              name={show.show.name}
              url={show.show.image?.medium}
            />
          ))}
        </div>
      </div>

    </>

  )
}

export default Home
