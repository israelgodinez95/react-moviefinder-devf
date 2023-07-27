import { Link } from 'react-router-dom'

const Show = ({ id, name, url, summary }) => {
  return (
    <>
      <div id='main-card' className='col-3' key={id}>
        <div className='card'>
          <div className='card-body'>
            <img
              className='card-img-top'
              src={url}
              alt={name}
            />
            <Link
              className='card-title'
              to={`/show/${name}`}
            >
              {name}
            </Link>
            <h5>{name}</h5>
            <div id='summary'>
              {summary}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Show
