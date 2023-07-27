import { Link } from 'react-router-dom'

const Show = ({ id, name, url, summary }) => {
  return (
    <>
      <div className='col-4' key={id}>
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
              <h2>{name}</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Show
