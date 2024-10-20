import Card from '../card/Card'
import useGetRealEstates from '../../hooks/useGetRealEstates'
import { useRealEstateContext } from '../../context/realEstatesContext/RealEstateContext'
import { addToFavorites } from '../../context/realEstatesContext/actions'

const RealEstatesList = () => {
  const { data: realEstates, error } = useGetRealEstates()

  const { state, dispatcher } = useRealEstateContext()

  console.log(state)

  return (
    <>
      {realEstates &&
        realEstates.ads.map((realEstate) => (
          <div key={realEstate.adId} className={'list-card w-100 d-flex'}>
            <Card
              title={realEstate.address}
              imageUrl={realEstate.image}
              price={realEstate.price}
              isChecked={realEstate.status === 'checked'}
              onAddToFavoriteButtonClick={() =>
                dispatcher(addToFavorites(realEstate))
              }
            ></Card>
          </div>
        ))}
    </>
  )
}

export default RealEstatesList
