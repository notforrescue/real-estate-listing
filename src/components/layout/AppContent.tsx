import type { FC, PropsWithChildren } from 'react'
import useGetRealEstates from '../../hooks/useGetRealEstates'
import withSnackBarProvider from '../snackBar/withSnackBarProvider'

const AppContent: FC<PropsWithChildren> = ({ children }) => {
  useGetRealEstates()

  return <>{children}</>
}

export default withSnackBarProvider(AppContent)
