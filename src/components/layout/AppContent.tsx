import { FC, PropsWithChildren } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AppContent: FC<PropsWithChildren> = ({ children }) => (
  <div className={'app-content container-fluid pb-4 pt-4'}>
    <div className={'row'}>
      <div className={'col-3 container'}>
        <nav className={'bg-white shadow rounded'}>
          <div className={'container pb-4 pt-4'}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to={`/`}>Main</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/favorites`}>Favorites</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={'col-9'}>
        <Outlet />
      </div>
    </div>
  </div>
)

export default AppContent
