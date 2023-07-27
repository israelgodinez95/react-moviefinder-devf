import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShowDetail = () => {
  const { name } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
      .then(res => res.json())
      .then(data => setShow(data))
      .catch(err => console.error(err))
  }, [name])
  return (
    <div id='show-details' className='card col-10 mx-auto'>
      <img
        className='img-fluid img-thumbnail mx-auto' src={show?.image.medium} alt='Card image cap'
      />
      <div className='card-body'>
        <h5 className='card-title'>Title: {show?.name}</h5>
        <p className='card-text'>Summary: {show?.summary}</p>
        <p className='card-text'>Rating: {show?.rating.average}</p>
        <p className='card-text'>Status: {show?.status}</p>
        <p className='card-text'>Type: {show?.type}</p>
      </div>

    </div>

  )
}

export default ShowDetail
