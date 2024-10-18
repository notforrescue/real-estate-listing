import { useEffect, useState } from 'react'

/**
 * Hook for getting the data from a promise
 * Also includes error handling
 * @param fetcher
 */
const useGetData = <T>(fetcher: () => Promise<T>) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    let isSubscribed = true

    const fetchData = async () => {
      try {
        const response = await fetcher()
        if (isSubscribed) {
          setData(response)
        }
      } catch (err) {
        setError(err)
      }
    }

    fetchData()

    return () => {
      isSubscribed = false
    }
  }, [fetcher])

  return { data: data, error: error }
}

export default useGetData
