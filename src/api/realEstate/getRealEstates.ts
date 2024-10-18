import apiClient from '../apiClient'
import { REAL_ESTATES_URL } from '../urls'
import { IRealEstateResponse } from './types'

async function getRealEstates() {
  const response = await apiClient.get<IRealEstateResponse>(
    `${REAL_ESTATES_URL}`
  )

  return response.data
}

export default getRealEstates
