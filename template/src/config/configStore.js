import {configureStore} from '@reduxjs/toolkit';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
import authSlice from '../features/auth/authSlice';
export const store = () =>
  configureStore({
    reducer: {
      auth: authSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  });
