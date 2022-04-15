import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f2f2f2',
      paper: '#f2f2f2'
    },
    text: {
      primary: '#11111'
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#222',
      paper: '#222'
    },
    text: {
      primary: '#fff'
    }
  }
});
