import React, { type FC, type PropsWithChildren } from 'react'
import { formatCurrency } from '../../utils/numberFormatter'
import AddToFavoriteButton from '../buttons/AddToFavoriteButton'

interface ICardProps {
  title: string
  price: number
  imageUrl: string
  isChecked: boolean
  onAddToFavoriteButtonClick: (target: any) => void
  titleElement?: string | React.ReactNode
  hideImage?: boolean
}

const Card: FC<PropsWithChildren<ICardProps>> = ({
  title,
  imageUrl,
  price,
  isChecked,
  onAddToFavoriteButtonClick,
  hideImage = false,
  titleElement,
  children,
}) => {
  return (
    <div className="card rounded bg-white shadow border-0 overflow-hidden w-100">
      <div className="row no-gutters h-100">
        {!hideImage && (
          <div className="list-card-image col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={imageUrl}
              loading="lazy"
              className="card-img rounded-0 img-fluid object-fit-cover"
              alt="Real estate image"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>
        )}

        <div className={`${!hideImage && 'col-md-8'}`}>
          <div className="card-body">
            <div className={'container-fluid'}>
              <div className={'row'}>
                <div className={'col-10'}>
                  <h2
                    className="card-title fw-bolder text-truncate"
                    title={title}
                  >
                    {titleElement || title}
                  </h2>
                  <h5 className="fw-bolder">{formatCurrency(price)}</h5>
                </div>
                <div className={'col-2'}>
                  <div className={'d-flex justify-content-end'}>
                    <AddToFavoriteButton
                      onClick={onAddToFavoriteButtonClick}
                      isChecked={isChecked}
                    />
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
