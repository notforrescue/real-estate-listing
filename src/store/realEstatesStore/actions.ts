import type { realEstateReducerActionType } from './types'
import { IRealEstate, IRealEstateResponse } from '../../api/realEstate/types'

export const addToFavorites = (
  payload: IRealEstate
): realEstateReducerActionType => ({
  type: 'ADD_TO_FAVORITES',
  payload,
})

export const setRealEstates = (
  payload: IRealEstateResponse
): realEstateReducerActionType => ({
  type: 'SET_REAL_ESTATE_STATE',
  payload,
})
