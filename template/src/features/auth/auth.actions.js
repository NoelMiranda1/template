import {createAsyncThunk} from '@reduxjs/toolkit';
import {validateUser} from '../services/auth.services';
import {authenticate} from './auth.slice';

export const authThunk = createAsyncThunk(
  'auth/ValidateUser',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(authenticate(true));

    // const headers = {
    //   'Api-key': 'API_KEY',
    //   'Ocp-Apim-Subscription-Key': 'OCR_APIM_SUBSCR_KEY',
    // };
    // const payload = {
    //   day: '01-01-2023',
    // };
    // try {
    //   const Data = await validateUser({
    //     headers: headers,
    //     payload: payload,
    //   });
    //   if (Data) {
    //     thunkAPI.dispatch(authenticate(true));
    //     return Data;
    //   } else {
    //     throw Data;
    //   }
    // } catch (error) {
    //   throw error;
    // }
  },
);
