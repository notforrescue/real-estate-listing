import NavigationItem from './NavigationItem'
import { ListUl, StarFill } from 'react-bootstrap-icons'

const Navigation = () => {
  return (
    <ul className="nav flex-column">
      <NavigationItem to={'/'} icon={<ListUl />}>
        List
      </NavigationItem>
      <NavigationItem to={'/favorites'} icon={<StarFill />}>
        Favorites
      </NavigationItem>
    </ul>
  )
}

export default Navigation
