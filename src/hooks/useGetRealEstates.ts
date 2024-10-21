import { IRealEstateResponse } from '../api/realEstate/types'
import getRealEstates from '../api/realEstate/getRealEstates'
import useGetData from './useGetData'
import { useEffect } from 'react'
import { useSessionStorage } from './useLocalStorage'
import { setRealEstates } from '../context/realEstatesContext/actions'
import { useRealEstateContext } from '../context/realEstatesContext/RealEstateContext'

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

const useGetRealEstates = () => {
  const { data, error } = useGetData<IRealEstateResponse>(getRealEstates)
  const { state, dispatcher } = useRealEstateContext()

  const { state: storageState } = useSessionStorage<IRealEstateResponse | null>(
    'realEstates',
    null
  )

  useEffect(() => {
    if (data) {
      console.log(mergeDeep(data, storageState))
      dispatcher(setRealEstates({ ...data, ...storageState }))
    }
  }, [data, storageState])

  return { data: state, error }
}

export default useGetRealEstates
