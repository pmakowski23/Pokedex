export interface Card {
  id: string;
  name: string;
  level: string;
  hp: string;
  rarity: string;
  images: {
    small: string;
    large: string;
  };
}

export interface CardsQuery {
  page?: number;
}

export interface SearchCardsQuery {
  name: string;
}

export interface CardQuery {
  id: string;
}

export interface CardResponse {
  data: Card;
}

export interface CardsResponse {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
