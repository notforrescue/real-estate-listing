import realEstateReducer from './realEstateReducer'
import useReducerWithMiddleware from '../../hooks/useReducerWithMiddleware'
import { useSessionStorage } from '../../hooks/useLocalStorage'
import { IRealEstateResponse } from '../../api/realEstate/types'
import { useCallback } from 'react'

const useRealEstateReducer = () => {
  const { setState: setStorageState } =
    useSessionStorage<IRealEstateResponse | null>('realEstates', null)

  const setStorageMiddleware = useCallback(
    (action, state) => {
      setStorageState(state)
    },
    [setStorageState]
  )

  const [state, dispatch] = useReducerWithMiddleware(
    realEstateReducer,
    null,
    [],
    [setStorageMiddleware]
  )

  return { state, realEstateDispatcher: dispatch }
}

export default useRealEstateReducer
