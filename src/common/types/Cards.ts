export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: [string];
  level: string;
  hp: string;
  types: [string];
  attacks: [
    {
      name: string;
      cost: [string];
      convertedEnergyCost: number;
      damage: string;
      text: string;
    },
    {
      name: string;
      cost: [string];
      convertedEnergyCost: number;
      damage: string;
      text: string;
    }
  ];
  weaknesses: [
    {
      type: string;
      value: string;
    }
  ];
  resistances: [
    {
      type: string;
      value: string;
    }
  ];
  number: string;
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
