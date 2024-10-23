import { FC, PropsWithChildren } from 'react'

const Footer: FC<PropsWithChildren> = ({ children }) => (
  <footer
    className={'app-footer bg-white shadow w-100'}
    style={{ height: '169px' }}
  >
    {children}
  </footer>
)

export default Footer
