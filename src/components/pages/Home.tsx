import type { FC } from 'react'
import RealEstatesList from '../list/RealEstatesList'
import TopBar from '../layout/TopBar'
import { useRealEstateContext } from '../../context/realEstatesContext/RealEstateContext'

const Home: FC = () => {
  const { state: realEstates } = useRealEstateContext()

  return (
    <>
      <TopBar title={'Lista'} counter={realEstates?.ads.length} />
      <RealEstatesList realEstates={realEstates?.ads} />
    </>
  )
}

export default Home
