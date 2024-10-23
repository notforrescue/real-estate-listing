import { cloneElement, FC, ReactElement } from 'react'
import Card from '../card/Card'
import { useRealEstateContext } from '../../context/realEstatesContext/RealEstateContext'
import { addToFavorites } from '../../store/realEstatesStore/actions'
import { IRealEstate } from '../../api/realEstate/types'
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'
import EmptyList from '../placeHolder/EmptyList'

interface IRealEstatesListProps {
  realEstates: IRealEstate[]
  cardContentRenderer?: ReactElement
}

const RealEstatesList: FC<IRealEstatesListProps> = ({
  realEstates,
  cardContentRenderer,
}) => {
  const { dispatcher } = useRealEstateContext()

  return (
    <>
      {realEstates ? (
        <>
          {realEstates.length > 0 ? (
            realEstates.map((realEstate) => (
              <div
                key={realEstate.adId}
                className={'list-card w-100 mb-3 d-flex'}
              >
                <Card
                  title={realEstate.address}
                  imageUrl={realEstate.image}
                  price={realEstate.price}
                  isChecked={realEstate.status === 'checked'}
                  onAddToFavoriteButtonClick={() =>
                    dispatcher(addToFavorites(realEstate))
                  }
                  titleElement={
                    <Link
                      to={`/real-estates/${realEstate.adId}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {realEstate.address}
                    </Link>
                  }
                >
                  {cardContentRenderer &&
                    cloneElement(cardContentRenderer, {
                      ...realEstate,
                    })}
                </Card>
              </div>
            ))
          ) : (
            <EmptyList />
          )}
        </>
      ) : (
        <Skeleton />
      )}
    </>
  )
}

export default RealEstatesList
