import type { FC } from 'react'
import { Navbar } from 'react-bootstrap'
import Navigation from '../navigation/Navigation'
import { List } from 'react-bootstrap-icons'
import Icon from '../icon/Icon'
import useToggle from '../../hooks/useToggle'

const Header: FC = () => {
  const { status, toggleStatus } = useToggle()

  return (
    <header
      className={'app-header rounded-bottom bg-white shadow'}
      style={{ minHeight: '50px' }}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        className={'d-flex d-md-none align-items-center'}
      >
        <Navbar.Toggle
          className={'bg-white border-0 shadow-none'}
          onClick={() => toggleStatus()}
        >
          <Icon size={22}>
            <List color={'#323EC8'} />
          </Icon>
        </Navbar.Toggle>
        <Navbar.Collapse in={status}>
          <div className={'pt-4'}>
            <Navigation handleOnClick={toggleStatus} />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
