export interface Mascota {
  id: number
  postDate: Date
  url: string
  allowComments: boolean
  likes: number
  comments: number
  userId: number
}


export type Mascotas = Array<Mascota>;
