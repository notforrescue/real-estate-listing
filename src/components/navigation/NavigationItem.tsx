import { type NavLinkProps, NavLink } from 'react-router-dom'
import { type Icon } from 'react-bootstrap-icons'
import { FC, PropsWithChildren, ReactElement } from 'react'

interface INavigationItemProps {
  to: NavLinkProps['to']
  icon: ReactElement<Icon>
}

const NavigationItem: FC<PropsWithChildren<INavigationItemProps>> = ({
  to,
  icon,
  children,
}) => {
  return (
    <li className="nav-item mb-3">
      <NavLink
        to={to}
        className={
          'btn d-flex btn-primary btn-lg border-0 w-100 align-items-center'
        }
      >
        <i className={'d-flex'} style={{ fontSize: '18px' }}>
          {icon}
        </i>
        {children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
