import React from 'react'
import { Toast } from 'react-bootstrap'
import SnackBarContext from './SnackBarContext'

interface SnackBarContextProviderProps {
  children: React.ReactNode
}

const SnackBarProvider: React.FC<SnackBarContextProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>('')

  const showSnackBar = (text: string) => {
    setMessage(text)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      {children}
      <div
        className={'position-fixed'}
        style={{ bottom: '40px', right: '40px' }}
      >
        <Toast show={open} onClose={handleClose} delay={4000} autohide>
          <Toast.Body>
            <p className={'mb-0'} style={{ color: ' #ed4337' }}>
              {message}
            </p>
          </Toast.Body>
        </Toast>
      </div>
    </SnackBarContext.Provider>
  )
}

export default SnackBarProvider
