import { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

import { selectTheme } from 'redux/theme/themeSlice';

interface MyThemeProviderProps {
  children: ReactElement;
}

export const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  const mode = useSelector(selectTheme);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
