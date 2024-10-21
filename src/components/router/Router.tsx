import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppContent from '../layout/AppContent'
import { lazy } from 'react'
import LazyLoadComponent from '../lazy/LazyLoadComponent'
import ListLayout from '../layout/ListLayout'

const Home = lazy(() => import('../pages/Home/Home'))
const Favorites = lazy(() => import('../pages/Favorites/Favorites'))
const Details = lazy(() => import('../pages/Details/Details'))

const routerDefinitions = createBrowserRouter([
  {
    path: '/',
    element: <ListLayout />,
    children: [
      {
        path: '/',
        element: (
          <LazyLoadComponent>
            <Home />
          </LazyLoadComponent>
        ),
      },
      {
        path: '/favorites',
        element: (
          <LazyLoadComponent>
            <Favorites />
          </LazyLoadComponent>
        ),
      },
    ],
  },
  {
    path: '/real-estates/:adId',
    element: (
      <LazyLoadComponent>
        <Details />
      </LazyLoadComponent>
    ),
  },
])

const Router = () => <RouterProvider router={routerDefinitions} />

export default Router
