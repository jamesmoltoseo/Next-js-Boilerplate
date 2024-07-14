// types.ts

export interface Game {
  commence_time: string
  home_team: string
  away_team: string
  bookmakers: {
    title: string
    markets: {
      key: string
      outcomes: {
        price: string
      }[]
    }[]
  }[]
}

export interface Page {
  href: string
  text: string
  image?: string
}
