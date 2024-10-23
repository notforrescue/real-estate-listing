import { useRealEstateContext } from '../context/realEstatesContext/RealEstateContext'
import { IRealEstate } from '../api/realEstate/types'
import { useEffect, useState } from 'react'

const filterFavorites = (realEstates: IRealEstate[]) => {
  return (
    realEstates &&
    realEstates.filter((realEstate) => realEstate.status === 'checked')
  )
}

export interface IRealEstateWithFavorite extends IRealEstate {
  addedToFavoritesDate: Date
}

const useGetFavoriteRealEstates = () => {
  const { state: realEstateContextState } = useRealEstateContext()
  const [favoriteRealEstates, setFavoriteRealEstates] = useState(
    realEstateContextState?.ads
  )

  /**
   * sync the store data with favorites
   */
  useEffect(() => {
    realEstateContextState &&
      setFavoriteRealEstates(realEstateContextState?.ads)
  }, [realEstateContextState])

  return {
    favoriteRealEstates: filterFavorites(
      favoriteRealEstates as IRealEstateWithFavorite[] | undefined
    ),
    setFavoriteRealEstates,
  }
}

export default useGetFavoriteRealEstates
