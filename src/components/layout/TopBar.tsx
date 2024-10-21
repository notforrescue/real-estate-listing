import type { FC, PropsWithChildren } from 'react'

interface ITopBarProps {
  title: string
  counter?: number
}

const TopBar: FC<PropsWithChildren<ITopBarProps>> = ({
  title,
  counter,
  children,
}) => {
  return (
    <div
      className={
        'd-flex shadow bg-white w-100 py-3 px-4 mb-4 rounded justify-content-between'
      }
    >
      <h4 className={'mb-0'}>{title}</h4>
      <div className={'d-flex align-items-center '}>
        {children}
        {!!counter && <h6 className={'mb-0 p-2 text-nowrap'}>{counter} db</h6>}
      </div>
    </div>
  )
}

export default TopBar
