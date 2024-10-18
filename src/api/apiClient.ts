import { BASE_API_URL } from './urls'
import axios from 'axios'
import errorReporter from './utils/errorReporter'

const apiClient = axios.create({
  baseURL: BASE_API_URL,
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    errorReporter(error)

    return Promise.reject(error)
  }
)

export default apiClient
