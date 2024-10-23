import React from 'react'
import { Toast } from 'react-bootstrap'
import SnackBarContext from './SnackBarContext'
import SnackBar from '../../components/snackBar/SnackBar'

interface SnackBarContextProviderProps {
  children: React.ReactNode
}

const SnackBarProvider: React.FC<SnackBarContextProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>('')

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
