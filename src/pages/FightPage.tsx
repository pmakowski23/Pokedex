import { Grid, Typography } from '@mui/material';

export const FightPage = () => {
  return (
    <Grid
      component="main"
      container
      justifyContent="center"
      spacing={2}
      sx={{ height: '80vh', bgcolor: 'background.default' }}
    >
      <Grid item xs={4}></Grid>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        item
        xs={4}
      >
        <Typography variant="h1" color="primary" textAlign="center">
          VS
        </Typography>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
