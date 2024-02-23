import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteCar: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavoriteCar: (state, { payload }) => {
      const updatedfavorites = state.favorites.filter(
        item => item.id !== payload.id
      );
      state.favorites = updatedfavorites;
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;