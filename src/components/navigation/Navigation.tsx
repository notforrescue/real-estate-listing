import NavigationItem from './NavigationItem'
import { ListUl, StarFill } from 'react-bootstrap-icons'
import { type FC } from 'react'

interface INavigationProps {
  handleOnClick?: () => void
}

const Navigation: FC<INavigationProps> = ({ handleOnClick }) => {
  return (
    <ul className="nav flex-column">
      <NavigationItem to={'/'} icon={<ListUl />} handleOnClick={handleOnClick}>
        List
      </NavigationItem>
      <NavigationItem
        to={'/favorites'}
        icon={<StarFill />}
        handleOnClick={handleOnClick}
      >
        Favorites
      </NavigationItem>
    </ul>
  )
}

export default Navigation
