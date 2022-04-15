import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from 'common/types';
import { RootState } from 'redux/store';

interface FightType {
  pokemon1: Card | null;
  pokemon2: Card | null;
}

interface Payload {
  pokemon: Card;
  pokemonNumber: 1 | 2;
}

const initialState: FightType = {
  pokemon1: null,
  pokemon2: null
};

export const fightSlice = createSlice({
  name: 'fight',
  initialState,
  reducers: {
    changePokemon: (state, action: PayloadAction<Payload>) => {
      if (action.payload.pokemonNumber === 1) {
        state.pokemon1 = action.payload.pokemon;
      } else {
        state.pokemon2 = action.payload.pokemon;
      }
    }
  }
});

export const { changePokemon } = fightSlice.actions;

export const selectPokemon1 = (state: RootState) => state.fight.pokemon1;
export const selectPokemon2 = (state: RootState) => state.fight.pokemon2;

export default fightSlice.reducer;
