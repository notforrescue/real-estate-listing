import { useCallback, useEffect, useState } from 'react'

/**
 * Hook for accessing local or session storage
 *
 * @param storage - Storage provider (window.localStorage or window.sessionStorage)
 * @param key string
 * @param defaultValue
 */
export function useStorage<T = object>(
  storage: Storage,
  key: string,
  defaultValue: T
) {
  const [state, setState] = useState<T>(
    storage.getItem(key) !== null
      ? (JSON.parse(storage.getItem(key) as string) as T)
      : defaultValue
  )

  useEffect(() => {
    storage.setItem(key, JSON.stringify(state))
  }, [storage, key, state])

  const remove = useCallback(() => {
    storage.removeItem(key)
  }, [storage, key])

  return { state, setState, remove } as const
}

/**
 * Hook for accessing local storage.
 */
export function useLocalStorage<T = object>(key: string, defaultValue: T) {
  return useStorage(localStorage, key, defaultValue)
}

/**
 * Hook for accessing session storage.
 */
export function useSessionStorage<T = object>(key: string, defaultValue: T) {
  return useStorage(sessionStorage, key, defaultValue)
}
