import type { FC, PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import useGetRealEstates from '../../hooks/useGetRealEstates'

const AppContent: FC<PropsWithChildren> = () => {
  useGetRealEstates()

  return (
    <div className={'app-content container-fluid pb-4 pt-4'}>
      <div className={'row'}>
        <div className={'col-3 container'}>
          <nav className={'bg-white shadow rounded'}>
            <div className={'container pb-4 pt-4'}>
              <Navigation />
            </div>
          </nav>
        </div>
        <div className={'col-9'}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppContent
