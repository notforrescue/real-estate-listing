import { sortByName } from '../../../../utils/sort'
import { Dispatch, SetStateAction } from 'react'
import { IRealEstate } from '../../../../api/realEstate/types'
import useSortDirection from './useSortDirection'

const useSortByName = (
  defaultState: IRealEstate[],
  setSortedArray: Dispatch<SetStateAction<IRealEstate[]>>
) => {
  const { status: sortedByNameStatus, toggleStatus: toggleSortByNameStatus } =
    useSortDirection()

  const handleSortByName = () => {
    toggleSortByNameStatus()
    setSortedArray(sortByName([...defaultState], 'address', sortedByNameStatus))
  }

  return { handleSortByName, sortedByNameStatus }
}

export default useSortByName
