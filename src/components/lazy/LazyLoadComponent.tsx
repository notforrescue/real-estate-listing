import { FC, PropsWithChildren, Suspense } from 'react'

const LazyLoadComponent: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={'Loading...'}>{children}</Suspense>
}

export default LazyLoadComponent
