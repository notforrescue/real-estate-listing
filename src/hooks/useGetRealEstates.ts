import { IRealEstateResponse } from '../api/realEstate/types'
import getRealEstates from '../api/realEstate/getRealEstates'
import useGetData from './useGetData'
import { useEffect } from 'react'
import { useSessionStorage } from './useLocalStorage'
import { setRealEstates } from '../context/realEstatesContext/actions'
import { useRealEstateContext } from '../context/realEstatesContext/RealEstateContext'

const useGetRealEstates = () => {
  const { data, error } = useGetData<IRealEstateResponse>(getRealEstates)
  const { dispatcher } = useRealEstateContext()

  const { state: storageState } = useSessionStorage<IRealEstateResponse | null>(
    'realEstates',
    null
  )

  useEffect(() => {
    if (data) {
      dispatcher(setRealEstates({ ...data, ...storageState }))
    }
  }, [data, storageState])

  return { data: storageState, error }
}

export default useGetRealEstates
