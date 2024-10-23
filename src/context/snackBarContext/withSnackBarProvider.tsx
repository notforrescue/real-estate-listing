import React from 'react'
import SnackBarProvider from './SnackBarProvider'

const withSnackBarProvider = <OriginalProps extends {}>(
  Component: React.FC<OriginalProps>
) => {
  return (props: OriginalProps) => (
    <SnackBarProvider>
      <Component {...(props as OriginalProps)} />
    </SnackBarProvider>
  )
}

export default withSnackBarProvider
