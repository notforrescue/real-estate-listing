import { Button } from 'react-bootstrap'
import Icon from '../../../icon/Icon'
import { SortDown, SortUp } from 'react-bootstrap-icons'
import { type FC } from 'react'
import { sortDirectionType } from '../utils/utils'

interface ISortButtonProps {
  handleSort: () => void
  sortDirection: sortDirectionType
  title: string
}

const SortButton: FC<ISortButtonProps> = ({
  handleSort,
  sortDirection,
  title,
}) => {
  return (
    <Button
      className={'d-flex'}
      onClick={handleSort}
      title={`Rendezés ${title} szerint`}
    >
      <p className={'mb-0'} style={{ marginRight: '4px' }}>
        {title}
      </p>
      <Icon size={18}>
        {sortDirection === 'asc' ? <SortUp /> : <SortDown />}
      </Icon>
    </Button>
  )
}

export default SortButton
