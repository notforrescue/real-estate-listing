import Card from '../card/Card'
import useGetRealEstates from '../../hooks/useGetRealEstates'

const RealEstatesList = () => {
  const { data: realEstates, error } = useGetRealEstates()

  return (
    <>
      {realEstates &&
        realEstates.ads.map(({ adId, address, image }) => (
          <div key={adId} style={{ maxHeight: '300px', display: 'flex' }}>
            <Card title={address} imageUrl={image}></Card>
          </div>
        ))}
    </>
  )
}

export default RealEstatesList
