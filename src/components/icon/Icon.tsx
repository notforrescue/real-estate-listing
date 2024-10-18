import type { FC, PropsWithChildren } from 'react'

interface IIconProps {
  /**
   *  font size in numbers
   */
  size: number
}

const Icon: FC<PropsWithChildren<IIconProps>> = ({ size = 14, children }) => {
  return <i style={{ fontSize: `${size}px` }}>{children}</i>
}

export default Icon
