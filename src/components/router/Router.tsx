import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppContent from '../layout/AppContent'
import RealEstatesList from '../list/RealEstatesList'

const routerDefinitions = createBrowserRouter([
  {
    path: '/',
    element: <AppContent />,
    children: [
      {
        path: '/',
        element: <RealEstatesList />,
      },
      {
        path: '/favorites',
        element: <div>favorites</div>,
      },
    ],
  },
])

const Router = () => <RouterProvider router={routerDefinitions} />

export default Router
