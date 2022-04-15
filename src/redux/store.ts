import { configureStore } from '@reduxjs/toolkit';

import { cardsApi } from './api/cards';
import theme from './theme/themeSlice';
import fight from './fightSlice';

const store = configureStore({
  reducer: {
    theme,
    fight,
    [cardsApi.reducerPath]: cardsApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
