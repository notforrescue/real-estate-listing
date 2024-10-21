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
import { ArrowLeft, ChevronLeft } from 'react-bootstrap-icons'
import Skeleton from '../../skeleton/Skeleton'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const Details: FC = () => {
  const navigate = useNavigate()
  const { adId } = useParams()

  const realEstate = useGetRealEstateById(Number(adId))

  const { dispatcher } = useRealEstateContext()

  return (
    <>
      <div className={'d-none d-md-flex'}>
        <Header />
      </div>
      <div
        className={
          'app-content details-page container-fluid  pb-md-4 pt-md-4 padding-md-0'
        }
      >
        <div className={'row d-none d-md-flex'}>
          <div className={'col-3 container d-none d-md-block'}>
            <Button
              className={'border-0 btn-lg mb-4 p-3'}
              onClick={() => navigate(-1)}
            >
              <Icon size={18}>
                <ArrowLeft />
              </Icon>
              Vissza
            </Button>
          </div>
          <div className={'col-12 col-md-9'}>
            <TopBar title={'Részletek'} />
          </div>
        </div>
        <div className={'col-12'}>
          <div className={'container-fluid padding-md-0'}>
            <Button
              className={
                'bg-dark btn btn-square-md shadow border-0 rounded-1 p-0 position-absolute'
              }
              style={{
                width: '34px',
                height: '34px',
                top: '40px',
                left: '20px',
              }}
              onClick={() => navigate(-1)}
            >
              <Icon size={18}>
                <ChevronLeft color={'white'} />
              </Icon>
            </Button>
            {realEstate ? (
              <>
                <div
                  className={
                    'd-flex overflow-hidden mw-100 rounded mb-md-4 detail-image'
                  }
                  style={{ height: ' 400px' }}
                >
                  <img
                    src={realEstate.image}
                    loading="lazy"
                    className="card-img img-fluid object-fit-cover"
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
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Details
