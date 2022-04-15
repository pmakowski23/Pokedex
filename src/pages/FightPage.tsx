import { Grid, Typography } from '@mui/material';
import { AsyncSearch, Card } from 'common/components';
import { useSelector } from 'react-redux';
import { selectPokemon1, selectPokemon2 } from 'redux/fightSlice';

export const FightPage = () => {
  const pokemon1 = useSelector(selectPokemon1);
  const pokemon2 = useSelector(selectPokemon2);
  return (
    <Grid
      component="main"
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: '90vh', bgcolor: 'background.default' }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        item
        xs={2}
      >
        <AsyncSearch pokemonNumber={1} />
        {pokemon1 && <Card pokemon={pokemon1} />}
      </Grid>
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
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        item
        xs={2}
      >
        <AsyncSearch pokemonNumber={2} />
        {pokemon2 && <Card pokemon={pokemon2} />}
      </Grid>
    </Grid>
  );
};
