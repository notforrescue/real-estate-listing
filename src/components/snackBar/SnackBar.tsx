import React, { type FC } from 'react'
import { Toast } from 'react-bootstrap'

interface ISnackBarProps {
  handleClose: () => void
  message: string
  isOpen: boolean
}

const SnackBar: FC<ISnackBarProps> = ({ isOpen, message, handleClose }) => {
  return (
    <div className={'position-fixed'} style={{ bottom: '40px', right: '40px' }}>
      <Toast show={isOpen} onClose={handleClose} delay={4000} autohide>
        <Toast.Body>
          <p className={'mb-0'} style={{ color: ' #ed4337' }}>
            {message}
          </p>
        </Toast.Body>
      </Toast>
    </div>
  )
}

export default SnackBar
