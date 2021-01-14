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
  comments?: Array<string>,
  location?: string,
  staticPath: string
}

export interface Dropdown {
  about: boolean,
  contact: boolean,
  contactFooter: boolean,
  aboutFooter: boolean
}

export interface Links {
  [index: number]: string
}

export interface Tab {
  name: string
  id: number
  route: string
}

export interface Info {
  email: string
  phone: number
}

export interface Settings {
  tabs: Array<Tab>,
  headers: Array<String>,
  externalLinkMap: Links
}

export interface ProjectTypes {
  enterprise: Array<Card>,
  personal: Array<Card>,
  template: Array<Card>
}

export interface Skillset {
  concepts: Array<Card>,
  databases: Array<Card>,
  devops: Array<Card>,
  jsFrameworks: Array<Card>,
  languages: Array<Card>,
  os: Array<Card>,
  webServers: Array<Card>
}

export interface Resume {
  online: Array<Card>,
  download: Array<Card>
}