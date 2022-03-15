import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getData = createAsyncThunk("data/post", async () => {
  const data = axios({
    method: "POST",
    url: "api.tinify.com",
    auth: "ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb",
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  console.log(data);
});

const sliceData = createSlice({
  name: "data",
  initialState: {
    image: [],
    status: null,
  },
  reducers: {
    [getData.pending]: (state, { payload }) => {
      state.status = "loading";
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.status = "success";
    },
    [getData.rejected]: (state, { payload }) => {
      state.status = "filled ):";
    },
  },
});
export default sliceData.reducer;
