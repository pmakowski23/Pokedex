import { Backdrop, CircularProgress } from '@mui/material';

interface FullScreenLoaderProps {
  open: boolean;
}

export const FullScreenLoader = ({ open }: FullScreenLoaderProps) => {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        position: 'fixed'
      }}
    >
      <CircularProgress size={100} />
    </Backdrop>
  );
};
