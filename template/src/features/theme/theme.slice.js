import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'ligth',
    ligth: {
      text: '#000',
      backgroundColor: '#fff',
      colorMain: '#009EFF',
    },
    dark: {
      text: '#fff',
      backgroundColor: '#000',
      colorMain: '#0014FF',
    },
    borders: {
      small: 5,
      default: 10,
      medium: 15,
      big: 20,
    },
    fonts: {
      sizeDefault: 16,
      small: 14,
      medium: 20,
      big: 24,
    },
    zIndex: {
      back: -10,
      normal: 1,
      tooltip: 10,
      fixed: 100,
      modal: 1000,
    },
    margin: {
      default: 10,
    },
  },
  reducers: {
    swapTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const {swapTheme} = themeSlice.actions;
export default themeSlice.reducer;
