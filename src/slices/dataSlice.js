import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].isFavorite;
        state.pokemons[currentPokemonIndex].isFavorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
