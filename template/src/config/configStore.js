import {configureStore} from '@reduxjs/toolkit';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
import Slices from '../features/index';

export const store = configureStore({
  reducer: Slices,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
