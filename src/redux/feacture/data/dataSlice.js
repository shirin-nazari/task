import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sliceData = createSlice({
  name: 'data',
  initialState: {
    image: [],
    status: null,
  },
  reducers: {
    add(state, { payload }) {
      // for state is array for add to array use Methode push
      state.image.push(payload);
    },
  },
});
export const { add, post } = sliceData.actions;
export default sliceData.reducer;
