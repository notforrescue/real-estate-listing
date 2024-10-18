import { FC, PropsWithChildren } from 'react'

const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className={'app-header rounded-bottom bg-white shadow'}>
    {children}
  </header>
)

export default Header
