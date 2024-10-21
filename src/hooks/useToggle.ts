import { useState, useCallback, useMemo, SetStateAction, Dispatch } from 'react'

export interface IUseToggle {
  status: boolean
  toggleStatus: Dispatch<SetStateAction<void>>
}

const useToggle = (initialStatus?: boolean): IUseToggle => {
  const [status, setStatus] = useState<boolean>(initialStatus || false)

  const toggleStatus = useCallback(() => {
    setStatus((prevStatus) => !prevStatus)
  }, [])

  return useMemo(
    () => ({
      status,
      toggleStatus,
    }),
    [status, toggleStatus]
  )
}

export default useToggle
