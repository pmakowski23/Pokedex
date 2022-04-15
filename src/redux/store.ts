import { configureStore } from '@reduxjs/toolkit';

import theme from './theme/themeSlice';

const store = configureStore({
  reducer: {
    theme,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
