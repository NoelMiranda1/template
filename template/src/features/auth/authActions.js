import {createAsyncThunk} from '@reduxjs/toolkit';
import {authenticate} from './authSlice';

export const getDepartmentsThunk = createAsyncThunk(
  'auth/ValidateUser',
  async (_, thunkAPI) => {
    const data = await fetch('url', {
      method: 'GET',
      headers: {
        'Api-key': 'API_KEY',
        'Ocp-Apim-Subscription-Key': 'OCR_APIM_SUBSCR_KEY',
      },
    }).catch(error => {
      return error;
    });
    try {
      const {Data} = await data.json();
      if (Data) {
        thunkAPI.dispatch(authenticate(true));
        return Data;
      } else {
        throw Data;
      }
    } catch (error) {
      throw error;
    }
  },
);
