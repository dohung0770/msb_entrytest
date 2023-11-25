export type User = {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  password?: string
  citizenId?: string
  phoneNumber?: string
  gender: string
  image?: string
  bio?: string
}

export type Product = {
  id: string
  name: string
  description: string
  imageUrl: string
}

