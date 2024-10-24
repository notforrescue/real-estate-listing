import { IRealEstateResponse } from '../api/realEstate/types'
import { IRealEstateWithFavorite } from '../hooks/useGetFavoriteRealEstates'

const mergeRealEstateResponseWithStorage = (
  sourceArr: IRealEstateResponse['ads'],
  cachedArr: IRealEstateWithFavorite[]
) => {
  return sourceArr.map((realEstate) => {
    if (cachedArr) {
      const cachedElem = cachedArr.find((elem) => elem.adId === realEstate.adId)

      if (cachedElem) {
        return {
          ...realEstate,
          addedToFavoritesDate: cachedElem['addedToFavoritesDate'],
          status: cachedElem['status'],
        }
      }
    }

    return realEstate
  })
}

export default mergeRealEstateResponseWithStorage
