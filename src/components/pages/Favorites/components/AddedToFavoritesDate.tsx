import type { FC } from 'react'
import type { IRealEstateWithFavorite } from '../../../../hooks/useGetFavoriteRealEstates'
import { Calendar3Week } from 'react-bootstrap-icons'
import Icon from '../../../icon/Icon'

const AddedToFavoritesDate: FC = ({
  addedToFavoritesDate,
}: IRealEstateWithFavorite) => {
  return (
    <>
      {addedToFavoritesDate && (
        <div className={'d-flex mt-md-3'}>
          <Icon size={16}>
            <Calendar3Week />
          </Icon>

          <p className="card-text mx-2 ">
            <small className="text-muted">
              {new Date(addedToFavoritesDate).toLocaleDateString('hu-HU')}
            </small>
          </p>
        </div>
      )}
    </>
  )
}

export default AddedToFavoritesDate
