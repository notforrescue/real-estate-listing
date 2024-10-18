import Card from '../card/Card'
import useGetRealEstates from '../../hooks/useGetRealEstates'

const RealEstatesList = () => {
  const { data: realEstates, error } = useGetRealEstates()

  return (
    <>
      {realEstates &&
        realEstates.ads.map(({ adId, address, image, price }) => (
          <div key={adId} className={'list-card w-100 d-flex'}>
            <Card title={address} imageUrl={image} price={price}></Card>
          </div>
        ))}
    </>
  )
}

export default RealEstatesList
