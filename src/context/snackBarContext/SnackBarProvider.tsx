import { useState, type FC, type PropsWithChildren } from 'react'
import SnackBarContext from './SnackBarContext'
import SnackBar from '../../components/snackBar/SnackBar'

const SnackBarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const showSnackBar = (text: string) => {
    setMessage(text)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      {children}

      <SnackBar handleClose={handleClose} message={message} isOpen={isOpen} />
    </SnackBarContext.Provider>
  )
}

export default SnackBarProvider
