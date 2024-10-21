import { type IRealEstate } from '../api/realEstate/types'
import { useRealEstateContext } from '../context/realEstatesContext/RealEstateContext'
import { useMemo } from 'react'

const useGetRealEstateById = (realEstateId: IRealEstate['adId']) => {
  const { state } = useRealEstateContext()

  return useMemo(() => {
    return state?.ads?.find((realEstate) => realEstate.adId === realEstateId)
  }, [state])
}

export default useGetRealEstateById
