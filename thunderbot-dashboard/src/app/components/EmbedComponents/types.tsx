export interface IField {
  name: string
  value: string
  inline?: string
}

export interface IImage {
  url?: string
  height?: number
  width?: number
}

export interface IFooter {
  text: string
  iconURL?: string
}

export interface IAuthor {
  name?: string
  url?: string
  iconURL?: string
}

export interface IData {
  title?: string
  description?: string
  url?: string
  timestamp?: string
  color?: string
}

export interface IEmbed extends IData {
  fields?: IField[]
  footer?: IFooter
  image?: IImage
  thumbnail?: IImage
  author?: IAuthor
}
