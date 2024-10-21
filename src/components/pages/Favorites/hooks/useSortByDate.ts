import { sortByDate } from '../../../../utils/sort'
import { Dispatch, SetStateAction } from 'react'
import { IRealEstate } from '../../../../api/realEstate/types'
import useSortDirection from './useSortDirection'

const useSortByDate = (
  defaultState: IRealEstate[],
  setSortedArray: Dispatch<SetStateAction<IRealEstate[]>>
) => {
  const { status: sortedByDateStatus, toggleStatus: toggleSortByDateStatus } =
    useSortDirection()

  const handleSortByDate = () => {
    toggleSortByDateStatus()
    setSortedArray(
      sortByDate([...defaultState], 'addedToFavsDate', sortedByDateStatus)
    )
  }

  return { handleSortByDate, sortedByDateStatus }
}

export default useSortByDate
