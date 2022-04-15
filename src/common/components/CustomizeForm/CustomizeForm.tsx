import { Grid, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Card } from 'common/types';
import { useDispatch } from 'react-redux';
import { changePokemon } from 'redux/fightSlice';

interface CustomizeFormProps {
  pokemon: Card;
  pokemonNumber: 1 | 2;
}

interface FormInputs {
  name: string;
  hp: string;
  level: string;
  rarity: string;
}

export const CustomizeForm = ({
  pokemon,
  pokemonNumber
}: CustomizeFormProps) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    dispatch(
      changePokemon({ pokemonNumber, pokemon: { ...pokemon, ...data } })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid display="flex" flexDirection="column" alignItems="center">
        <img
          style={{ width: '100%' }}
          src={pokemon.images.small}
          alt={pokemon.name}
          loading="lazy"
        />
        <TextField defaultValue={pokemon.name} {...register('name')} />
        <TextField
          type="number"
          defaultValue={pokemon.hp}
          {...register('hp')}
        />
        <TextField defaultValue={pokemon.level} {...register('level')} />
        <TextField defaultValue={pokemon.rarity} {...register('rarity')} />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Grid>
    </form>
  );
};
