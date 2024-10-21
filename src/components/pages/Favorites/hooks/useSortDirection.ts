import useToggle from '../../../../hooks/useToggle'
import { mapBooleanToSortDirection } from '../utils/utils'

const useSortDirection = () => {
  const { status, ...rest } = useToggle()

  return { status: mapBooleanToSortDirection(status), ...rest }
}

export default useSortDirection
