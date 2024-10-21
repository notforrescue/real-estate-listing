import Router from './components/router/Router'
import RealEstateProvider from './context/realEstatesContext/RealEstateProvider'

export default function App() {
  return (
    <div className={'app'}>
      <RealEstateProvider>
        <Router />
      </RealEstateProvider>
    </div>
  )
}
