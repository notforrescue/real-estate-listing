import { IRealEstateResponse } from '../api/realEstate/types'
import getRealEstates from '../api/realEstate/getRealEstates'
import useGetData from './useGetData'

const useGetRealEstates = () => {
  return useGetData<IRealEstateResponse>(getRealEstates)
}

export default useGetRealEstates
