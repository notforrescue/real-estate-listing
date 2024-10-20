import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppContent from '../layout/AppContent'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'

const routerDefinitions = createBrowserRouter([
  {
    path: '/',
    element: <AppContent />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
])

const Router = () => <RouterProvider router={routerDefinitions} />

export default Router
