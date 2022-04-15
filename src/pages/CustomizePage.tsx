import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectPokemon1, selectPokemon2 } from 'redux/fightSlice';
import { AsyncSearch, CustomizeForm } from 'common/components';

export const CustomizePage = () => {
  const pokemon1 = useSelector(selectPokemon1);
  const pokemon2 = useSelector(selectPokemon2);

  return (
    <Grid
      component="main"
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ minHeight: '93vh', bgcolor: 'background.default' }}
    >
      <Grid
        item
        xs={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <AsyncSearch pokemonNumber={1} />
        {pokemon1 && <CustomizeForm pokemon={pokemon1} pokemonNumber={1} />}
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <AsyncSearch pokemonNumber={2} />
        {pokemon2 && <CustomizeForm pokemon={pokemon2} pokemonNumber={2} />}
      </Grid>
    </Grid>
  );
};
