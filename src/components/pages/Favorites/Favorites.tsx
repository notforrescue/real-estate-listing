import { type FC } from 'react'
import RealEstatesList from '../../list/RealEstatesList'
import useGetFavoriteRealEstates from '../../../hooks/useGetFavoriteRealEstates'
import TopBar from '../../layout/TopBar'
import AddedToFavoritesDate from './components/AddedToFavoritesDate'
import useSortByName from './hooks/useSortByName'
import useSortByDate from './hooks/useSortByDate'
import SortButton from './components/SortButton'

const Favorites: FC = () => {
  const { favoriteRealEstates, setFavoriteRealEstates } =
    useGetFavoriteRealEstates()

  const { handleSortByName, sortedByNameStatus } = useSortByName(
    favoriteRealEstates,
    setFavoriteRealEstates
  )
  const { handleSortByDate, sortedByDateStatus } = useSortByDate(
    favoriteRealEstates,
    setFavoriteRealEstates
  )

  return (
    <>
      <TopBar title={'Kedvencek'} counter={favoriteRealEstates?.length}>
        <div className="container d-flex">
          <SortButton
            handleSort={handleSortByName}
            sortDirection={sortedByNameStatus}
            title={'cím'}
          />
        </div>
        <div className="col-sm">
          <SortButton
            handleSort={handleSortByDate}
            sortDirection={sortedByDateStatus}
            title={'dátum'}
          />
        </div>
      </TopBar>
      <RealEstatesList
        realEstates={favoriteRealEstates}
        cardContentRenderer={<AddedToFavoritesDate />}
      />
    </>
  )
}

export default Favorites
