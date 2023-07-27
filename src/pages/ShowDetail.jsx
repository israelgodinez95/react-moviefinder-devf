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
    <div className='card'>
      <img
        className='img-fluid img-thumbnail' src={show?.image.medium} alt='Card image cap'
      />
      <div className='card-body'>
        <h5 className='card-title'>Title: {show?.name}</h5>
        <p className='card-text'>Summary: {show?.summary}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Rating: {show?.rating.average}</li>
        <li className='list-group-item'>Status: {show?.status}</li>
        <li className='list-group-item'>Type: {show?.type}</li>
      </ul>
    </div>

  )
}

export default ShowDetail
