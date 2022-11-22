import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {authenticate: false},
  reducers: {
    authenticate(state, action) {
      state.authenticate = action.payload;
    },
  },
});
export const {authenticate} = authSlice.actions;
export default authSlice.reducer;
