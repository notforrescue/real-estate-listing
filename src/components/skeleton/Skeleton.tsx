import { type FC } from 'react'

const Skeleton: FC = () => {
  return (
    <>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
    </>
  )
}

export default Skeleton
