export type sortDirectionType = 'asc' | 'desc'

export const mapBooleanToSortDirection = (
  status: boolean
): sortDirectionType => (status ? 'asc' : 'desc')
