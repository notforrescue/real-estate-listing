import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Router from './components/router/Router'
import RealEstateProvider from './context/realEstatesContext/RealEstateProvider'

export default function App() {
  return (
    <div className={'app'}>
      <Header>
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        </nav>
      </Header>
      <RealEstateProvider>
        <Router />
      </RealEstateProvider>
      <Footer></Footer>
    </div>
  )
}
