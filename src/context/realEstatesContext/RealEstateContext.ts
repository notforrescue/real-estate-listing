import type { realEstateDispatcherType } from './types'
import type { IRealEstateResponse } from '../../api/realEstate/types'
import { createContext, useContext } from 'react'

export interface IRealEstateContext {
  state: IRealEstateResponse | undefined
  dispatcher: realEstateDispatcherType
}

export const RealEstateContext = createContext({
  state: null as IRealEstateResponse | null,
  dispatcher: null as realEstateDispatcherType | null,
})

export const useRealEstateContext = () =>
  useContext(RealEstateContext) as IRealEstateContext
