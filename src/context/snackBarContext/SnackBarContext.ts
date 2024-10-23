import { createContext } from 'react'

export type SnackBarContextActions = {
  showSnackBar: (text: string) => void
}

const SnackBarContext = createContext({} as SnackBarContextActions)

export default SnackBarContext
