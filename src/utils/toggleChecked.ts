import { checkedType } from '../api/realEstate/types'

const toggleChecked = (status: checkedType) => {
  return status === 'checked' ? 'unchecked' : 'checked'
}

export default toggleChecked
