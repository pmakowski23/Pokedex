import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

interface ThemeType {
  theme: PaletteMode;
}

const initialState: ThemeType = {
  theme:
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return {
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
