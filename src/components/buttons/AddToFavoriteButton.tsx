import type { FC } from 'react'
import Icon from '../icon/Icon'
import { StarFill, Star } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

interface IAddToFavoriteButtonProps {
  onClick: (target: any) => void
  isChecked: boolean
}

const AddToFavoriteButton: FC<IAddToFavoriteButtonProps> = ({
  onClick,
  isChecked,
}) => {
  return (
    <Button
      className={'bg-white btn btn-square-md shadow border-0 rounded-1 p-0'}
      style={{ width: '34px', height: '34px' }}
      onClick={onClick}
    >
      <Icon size={18}>
        {isChecked ? (
          <StarFill color={'#FFB300'} />
        ) : (
          <Star color={'#B2B2B2'} />
        )}
      </Icon>
    </Button>
  )
}

export default AddToFavoriteButton
