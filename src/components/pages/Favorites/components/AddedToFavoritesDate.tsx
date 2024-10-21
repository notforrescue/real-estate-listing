import type { FC } from 'react'
import type { IRealEstateWithFavorite } from '../../../../hooks/useGetFavoriteRealEstates'
import { Calendar3Week } from 'react-bootstrap-icons'
import Icon from '../../../icon/Icon'

const AddedToFavoritesDate: FC = ({
  addedToFavsDate,
}: IRealEstateWithFavorite) => {
  return (
    <>
      {addedToFavsDate && (
        <div className={'d-flex mt-3'}>
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
    </>
  )
}

export default AddedToFavoritesDate
