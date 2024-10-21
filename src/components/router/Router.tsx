import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppContent from '../layout/AppContent'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites/Favorites'
import Details from '../pages/Details/Details'

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
      {
        path: 'real-estates/:adId',
        element: <Details />,
      },
    ],
  },
])

const Router = () => <RouterProvider router={routerDefinitions} />

export default Router
