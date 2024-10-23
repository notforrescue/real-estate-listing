import type { FC, PropsWithChildren } from 'react'
import useGetRealEstates from '../../hooks/useGetRealEstates'
import withSnackBarProvider from '../../context/snackBarContext/withSnackBarProvider'

const AppContent: FC<PropsWithChildren> = ({ children }) => {
  useGetRealEstates()

  return <>{children}</>
}

export default withSnackBarProvider(AppContent)
