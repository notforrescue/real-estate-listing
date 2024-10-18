export interface IContactResponse {
  email: string
  parsedPhoneNumbers: string[]
}

export interface IRealEstate {
  adId: number
  address: string
  price: number
  image: string
  currency: string
  uploadDate: string
  description: string
  status: string
  contact: IContactResponse
}

export interface IRealEstateResponse {
  ads: IRealEstate[]
}
