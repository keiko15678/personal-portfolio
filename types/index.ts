export interface Card {
  id: number,
  duration: number,
  name: string,
  sourceUrl: string,
  publishDate: number | string,
  rating: number | string,
  link?: string,
  source?: string,
  imageUrl?: string,
  fullName?: string,
  stack?: Array<string>,
  comments?: Array<string>
}