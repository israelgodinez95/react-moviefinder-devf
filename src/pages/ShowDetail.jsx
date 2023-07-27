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
    <div className='main'>
      <div className='card'>
        <div className='card-header'>
          <h3>{show?.name}</h3>
        </div>
      </div>
    </div>

  )
}

export default ShowDetail
