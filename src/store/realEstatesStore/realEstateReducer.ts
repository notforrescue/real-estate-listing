import { IRealEstateState, realEstateReducerActionType } from './types'
import toggleChecked from '../../utils/toggleChecked'

const realEstateReducer = (
  state: IRealEstateState,
  action: realEstateReducerActionType
) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const index = state.ads.findIndex(
        (realEstate) => realEstate.adId === action.payload.adId
      )

      const newArray = [...state.ads]
      const realEstateToUpdate = newArray[index]

      realEstateToUpdate.status = toggleChecked(realEstateToUpdate.status)
      realEstateToUpdate.addedToFavoritesDate = new Date()

      return {
        ...state,
        ads: newArray,
      }
    }

    case 'SET_REAL_ESTATE_STATE': {
      return {
        ...action.payload,
      }
    }
  }
}

export default realEstateReducer
