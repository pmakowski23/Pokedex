import { createApi } from '@reduxjs/toolkit/query/react';
import {
  CardQuery,
  CardResponse,
  CardsResponse,
  CardsQuery,
  SearchCardsQuery
} from 'common/types';
import baseQuery from 'redux/baseQuery';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    getCards: builder.query<CardsResponse, CardsQuery>({
      query: ({ page = 1 }) => ({
        url: `cards?pageSize=20&page=${page}}`,
        method: 'GET'
      })
    }),
    searchCards: builder.query<CardsResponse, SearchCardsQuery>({
      query: ({ name }) => ({
        url: `cards?q=name:"${name}"`,
        method: 'GET'
      })
    }),
    getCard: builder.query<CardResponse, CardQuery>({
      query: ({ id }) => ({ url: `cards/${id}`, method: 'GET' })
    })
  })
});

export const { useGetCardQuery, useGetCardsQuery, useLazySearchCardsQuery } =
  cardsApi;
