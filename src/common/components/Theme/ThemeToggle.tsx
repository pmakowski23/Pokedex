import { IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch } from 'react-redux';

import { toggleTheme } from 'redux/theme';
import { CSSProperties } from 'react';

export const ThemeToggle = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(toggleTheme())} style={wrapperStyles}>
      <Typography>Toggle theme</Typography>
      <IconButton sx={{ ml: 1 }} color="inherit">
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </div>
  );
};

const wrapperStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
};
