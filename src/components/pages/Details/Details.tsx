import type { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetRealEstateById from '../../../hooks/useGetRealEstateById'
import { addToFavorites } from '../../../context/realEstatesContext/actions'
import Card from '../../card/Card'
import { useRealEstateContext } from '../../../context/realEstatesContext/RealEstateContext'
import RealEstateDetails from './components/RealEstateDetails'
import TopBar from '../../layout/TopBar'
import { Button } from 'react-bootstrap'
import Icon from '../../icon/Icon'
import { ArrowLeft } from 'react-bootstrap-icons'

const Details: FC = () => {
  const navigate = useNavigate()
  const { adId } = useParams()

  const realEstate = useGetRealEstateById(Number(adId))

  const { dispatcher } = useRealEstateContext()

  return (
    <>
      <TopBar title={'Részletek'} />
      <Button
        className={'border-0 btn-lg mb-4 p-3'}
        onClick={() => navigate(-1)}
      >
        <Icon size={18}>
          <ArrowLeft />
        </Icon>
        Vissza
      </Button>
      {realEstate && (
        <>
          <div
            className={'d-flex overflow-hidden mw-100 rounded mb-4'}
            style={{ maxHeight: ' 400px' }}
          >
            <img
              src={realEstate.image}
              loading="lazy"
              className="card-img rounded-0 img-fluid object-fit-cover"
              alt="Real estate image"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>

          <Card
            title={realEstate.address}
            imageUrl={realEstate.image}
            price={realEstate.price}
            isChecked={realEstate.status === 'checked'}
            onAddToFavoriteButtonClick={() =>
              dispatcher(addToFavorites(realEstate))
            }
            hideImage={true}
          >
            <RealEstateDetails realEstate={realEstate} />
          </Card>
        </>
      )}
    </>
  )
}

export default Details
