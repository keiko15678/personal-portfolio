export interface Card {
  id: number,
  duration: number,
  name: string,
  sourceUrl: string,
  publishDate: number,
  rating: number,
  link?: string,
  source?: string,
  imageUrl?: string
}