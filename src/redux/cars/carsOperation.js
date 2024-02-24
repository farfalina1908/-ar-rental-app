import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LIMIT_PER_PAGE } from '../../constants/constants';

axios.defaults.baseURL = 'https://65da1673bcc50200fcdc8f9a.mockapi.io/api';

export const fetchCarsThunk = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/cars?limit=${LIMIT_PER_PAGE}&page=1`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLoadMoreCarsThunk = createAsyncThunk(
  'cars/fetchLoadMoreCars',
  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get(
        `/cars?limit=${LIMIT_PER_PAGE}&page=${currentPage}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);