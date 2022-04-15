import { CircularProgress, CircularProgressProps } from '@mui/material';

export const Loader = ({ ...rest }: CircularProgressProps): JSX.Element => {
  return (
    <div
      style={{
        width: '100%',
        height: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <CircularProgress size={50} {...rest} />
    </div>
  );
};
