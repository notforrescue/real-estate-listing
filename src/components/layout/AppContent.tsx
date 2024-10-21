import type { FC, PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import useGetRealEstates from '../../hooks/useGetRealEstates'
import Header from './Header'
import Footer from './Footer'

const AppContent: FC<PropsWithChildren> = () => {
  useGetRealEstates()

  return (
    <>
      <Header />
      <div className={'app-content container-fluid pb-4 pt-4'}>
        <div className={'row'}>
          <div className={'col-3 container d-none d-md-block'}>
            <nav className={'bg-white shadow rounded'}>
              <div className={'container pb-4 pt-4'}>
                <Navigation />
              </div>
            </nav>
          </div>
          <div className={'col-12 col-md-9'}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default AppContent
