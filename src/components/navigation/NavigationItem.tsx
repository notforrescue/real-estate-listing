import { type NavLinkProps, NavLink } from 'react-router-dom'
import { type Icon as IconType } from 'react-bootstrap-icons'
import type { FC, PropsWithChildren, ReactElement } from 'react'
import Icon from '../icon/Icon'

interface INavigationItemProps {
  to: NavLinkProps['to']
  icon: ReactElement<IconType>
  handleOnClick?: () => void
}

const NavigationItem: FC<PropsWithChildren<INavigationItemProps>> = ({
  to,
  icon,
  children,
  handleOnClick,
}) => {
  return (
    <li className="nav-item mb-3">
      <NavLink
        to={to}
        className={
          'btn d-flex btn-primary btn-lg border-0 w-100 align-items-center'
        }
        onClick={handleOnClick && handleOnClick}
      >
        <Icon size={18}>{icon}</Icon>
        {children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
