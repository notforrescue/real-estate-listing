import { IRealEstateResponse } from '../api/realEstate/types'
import getRealEstates from '../api/realEstate/getRealEstates'
import useGetData from './useGetData'
import { useEffect } from 'react'
import { useSessionStorage } from './useLocalStorage'
import { setRealEstates } from '../store/realEstatesStore/actions'
import { useRealEstateContext } from '../context/realEstatesContext/RealEstateContext'
import useSnackBar from '../context/snackBarContext/useSnackBar'
import { IRealEstateWithFavorite } from './useGetFavoriteRealEstates'
import mergeRealEstatesWithCached from '../utils/mergeWithCached'

const useGetRealEstates = () => {
  const { data, error } = useGetData<IRealEstateResponse>(getRealEstates)
  const { state, dispatcher } = useRealEstateContext()
  const { showSnackBar } = useSnackBar()

  const { state: storageState } = useSessionStorage<{
    ads: IRealEstateWithFavorite[]
  } | null>('realEstates', null)

  useEffect(() => {
    if (data) {
      dispatcher(
        setRealEstates({
          ads: mergeRealEstatesWithCached(data.ads, storageState?.ads),
        })
      )
    }
  }, [data, storageState])

  useEffect(() => {
    if (error) {
      showSnackBar('A betöltés során hiba történt. Kérjük próbálja meg később')
    }
  }, [error, showSnackBar])

  return { data: state, error }
}

export default useGetRealEstates
