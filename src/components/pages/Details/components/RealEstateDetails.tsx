import type { FC } from 'react'
import type { IRealEstateWithFavorite } from '../../../../hooks/useGetFavoriteRealEstates'
import { Calendar3Week } from 'react-bootstrap-icons'
import Icon from '../../../icon/Icon'

const RealEstateDetails: FC = ({
  addedToFavsDate,
  description,
}: IRealEstateWithFavorite) => {
  return (
    <>
      {addedToFavsDate && (
        <div className={'d-flex mt-3 mb-4'}>
          <Icon size={16}>
            <Calendar3Week />
          </Icon>

          <p className="card-text mx-2 ">
            <small className="text-muted">
              {new Date(addedToFavsDate).toLocaleDateString('hu-HU')}
            </small>
          </p>
        </div>
      )}

      <div className={'rounded p-4 bg-light w-100'}>
        <p>{description}</p>
      </div>
    </>
  )
}

export default RealEstateDetails
