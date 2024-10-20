export interface IContactResponse {
  email: string
  parsedPhoneNumbers: string[]
}

export type checkedType = 'checked' | 'unchecked'

export interface IRealEstate {
  adId: number
  address: string
  price: number
  image: string
  currency: string
  uploadDate: string
  description: string
  status: checkedType
  contact: IContactResponse
}

export interface IRealEstateResponse {
  ads: IRealEstate[]
}
