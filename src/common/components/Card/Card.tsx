import { Paper, Typography } from '@mui/material';
import { Card as CardType } from 'common/types';

interface CardProps {
  pokemon: CardType;
}

export const Card = ({ pokemon }: CardProps) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 2
      }}
    >
      <img
        style={{ width: '100%', height: '100%' }}
        src={pokemon.images.large}
        alt={pokemon.name}
        loading="lazy"
      />
      <Typography variant="h6">{pokemon.name}</Typography>
      <Typography variant="h6">HP: {pokemon.hp}</Typography>
      <Typography variant="h6">LVL: {pokemon.level || '??'}</Typography>
      <Typography variant="h6">RARE: {pokemon.rarity}</Typography>
    </Paper>
  );
};
