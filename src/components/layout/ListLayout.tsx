import Header from './Header'
import Navigation from '../navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const ListLayout = () => {
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

export default ListLayout
