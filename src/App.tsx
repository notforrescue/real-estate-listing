import Router from './components/router/Router'
import RealEstateProvider from './context/realEstatesContext/RealEstateProvider'
import AppContent from './components/layout/AppContent'

export default function App() {
  return (
    <div className={'app'}>
      <RealEstateProvider>
        <AppContent>
          <Router />
        </AppContent>
      </RealEstateProvider>
    </div>
  )
}
