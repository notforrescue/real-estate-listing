import React from 'react'
import { IRealEstate, IRealEstateResponse } from '../../api/realEstate/types'

export interface IRealEstateState extends IRealEstateResponse {}

export type realEstateReducerActionType =
  | {
      type: 'ADD_TO_FAVORITES'
      payload: IRealEstate
    }
  | {
      type: 'SET_REAL_ESTATE_STATE'
      payload: IRealEstateResponse
    }

export type realEstateDispatcherType =
  React.Dispatch<realEstateReducerActionType>
