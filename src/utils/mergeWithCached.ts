import { IRealEstateResponse } from '../api/realEstate/types'
import { IRealEstateWithFavorite } from '../hooks/useGetFavoriteRealEstates'

const mergeRealEstatesWithCached = (
  sourceArr: IRealEstateResponse['ads'],
  cachedArr: IRealEstateWithFavorite[]
) => {
  return sourceArr.map((realEstate) => {
    if (cachedArr) {
      const cachedElem = cachedArr.find((elem) => elem.adId === realEstate.adId)

      if (cachedElem) {
        realEstate['addedToFavoritesDate'] = cachedElem['addedToFavoritesDate']
        realEstate['status'] = cachedElem['status']
      }
    }

    return realEstate
  })
}

export default mergeRealEstatesWithCached
