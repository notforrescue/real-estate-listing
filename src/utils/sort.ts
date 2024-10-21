import type { sortDirectionType } from '../components/pages/Favorites/utils/utils'

type sortFn = (
  arr: any[],
  sortKey: string,
  direction: sortDirectionType
) => any[]

export const sortByName: sortFn = (arr, sortKey, direction) => {
  return [...arr].sort((a: any, b: any): any => {
    if (direction === 'asc') {
      return a[sortKey].toString().localeCompare(b[sortKey])
    }

    return b[sortKey].toString().localeCompare(a[sortKey])
  })
}

export const sortByDate: sortFn = (arr, sortKey, direction) => {
  return [...arr].sort((a, b) => {
    // nullish coalesce
    const A = new Date(a[sortKey] || 0).getTime()
    const B = new Date(b[sortKey] || 0).getTime()

    if (direction === 'asc') {
      return A - B
    }

    return B - A
  })
}
