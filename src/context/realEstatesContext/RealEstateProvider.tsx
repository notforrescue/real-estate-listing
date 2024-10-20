import type { FC, PropsWithChildren } from 'react'
import { RealEstateContext } from './RealEstateContext'
import useRealEstateReducer from './useRealEstateReducer'

const RealEstateProvider: FC<PropsWithChildren> = ({ children }) => {
  const { state: realEstateState, realEstateDispatcher } =
    useRealEstateReducer()

  return (
    <RealEstateContext.Provider
      value={{ state: realEstateState, dispatcher: realEstateDispatcher }}
    >
      {children}
    </RealEstateContext.Provider>
  )
}

export default RealEstateProvider
