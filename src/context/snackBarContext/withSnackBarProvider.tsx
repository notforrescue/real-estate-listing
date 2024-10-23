import React from 'react'
import SnackBarProvider from './SnackBarProvider'

const withSnackBarProvider = <OriginalProps extends object>(
  Component: React.FC<OriginalProps>
) => {
  // eslint-disable-next-line react/display-name
  return (props: OriginalProps) => (
    <SnackBarProvider>
      <Component {...(props as OriginalProps)} />
    </SnackBarProvider>
  )
}

export default withSnackBarProvider
