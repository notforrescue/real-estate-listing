import type { FC } from 'react'
import { Calendar3Week } from 'react-bootstrap-icons'
import Icon from '../../../icon/Icon'
import ContactModal from './ContactModal'
import useToggle from '../../../../hooks/useToggle'
import { IRealEstate } from '../../../../api/realEstate/types'
import { Button } from 'react-bootstrap'

interface IRealEstateDetailsProps {
  realEstate: IRealEstate
}

const RealEstateDetails: FC<IRealEstateDetailsProps> = ({ realEstate }) => {
  const { status: isModalShown, toggleStatus: toggleModal } = useToggle()

  return (
    <>
      {realEstate.addedToFavsDate && (
        <div className={'d-flex mt-3 mb-4'}>
          <Icon size={16}>
            <Calendar3Week />
          </Icon>

          <p className="card-text mx-2 ">
            <small className="text-muted">
              {new Date(realEstate.addedToFavsDate).toLocaleDateString('hu-HU')}
            </small>
          </p>
        </div>
      )}

      <div className={'rounded p-4 bg-light w-100 mb-4'}>
        <p>{realEstate.description}</p>
      </div>
      <Button
        className={'btn-lg btn-secondary px-5'}
        onClick={() => toggleModal()}
      >
        Kapcsolat
      </Button>
      <ContactModal show={isModalShown} toggleShow={toggleModal} />
    </>
  )
}

export default RealEstateDetails
