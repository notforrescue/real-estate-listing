import { FC, PropsWithChildren } from 'react'
import { formatCurrency } from '../../utils/numberFormatter'
import AddToFavoriteButton from '../buttons/AddToFavoriteButton'

interface ICardProps {
  title: string
  price: number
  imageUrl: string
  isChecked: boolean
  onAddToFavoriteButtonClick: (target: any) => void
}

const Card: FC<PropsWithChildren<ICardProps>> = ({
  title,
  imageUrl,
  price,
  isChecked,
  onAddToFavoriteButtonClick,
  children,
}) => {
  return (
    <div className="card mb-3 rounded bg-white shadow border-0 overflow-hidden w-100">
      <div className="row no-gutters h-100">
        <div className="list-card-image col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={imageUrl}
            loading="lazy"
            className="card-img rounded-0 img-fluid object-fit-cover"
            alt="Real estate image"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className={'container-fluid'}>
              <div className={'row'}>
                <div className={'col-10'}>
                  <h2
                    className="card-title fw-bolder text-truncate"
                    title={title}
                  >
                    {title}
                  </h2>
                  <h5 className="fw-bolder">{formatCurrency(price)}</h5>
                  {/*<p className="card-text">*/}
                  {/*  This is a wider card with supporting text below as a natural*/}
                  {/*  lead-in to additional content. This content is a little bit*/}
                  {/*  longer.*/}
                  {/*</p>*/}
                  {children}
                </div>
                <div className={'col-2 d-flex justify-content-lg-end'}>
                  <AddToFavoriteButton
                    onClick={onAddToFavoriteButtonClick}
                    isChecked={isChecked}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
