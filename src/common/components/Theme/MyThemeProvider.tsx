import { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import { selectTheme } from 'redux/theme/themeSlice';
import { darkTheme, lightTheme } from 'common/theme';

interface MyThemeProviderProps {
  children: ReactElement;
}

export const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  const mode = useSelector(selectTheme);
  const theme = useMemo(
    () => (mode === 'dark' ? darkTheme : lightTheme),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
