import { FC, PropsWithChildren } from 'react'

interface ICardProps {
  title: string
  imageUrl: string
}

const Card: FC<PropsWithChildren<ICardProps>> = ({ title, imageUrl }) => {
  return (
    <div
      className="card mb-3 rounded shadow border-0 overflow-hidden"
      // style={{ height: '180px' }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={imageUrl}
            loading="lazy"
            className="card-img rounded-0 img-fluid"
            alt="Real estate image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
