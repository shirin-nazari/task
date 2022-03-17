import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getData = createAsyncThunk("data/post", async (data) => {
  const userName = "shirinnazari";
  const password = "ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb";
  const token = Buffer.from(`${userName}:${password}`, "utf8").toString(
    "base64"
  );
  const url = "api.tinify.com/shrink";
  const postData = axios
    .post(
      url,
      {
        body: {
          source: {
            url: data,
          },
        },
      },
      {
        Headers: {
          Authorization: `Basic ${token}`,
        },
      }
    )
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  const getData = axios
    .get(`${postData}/output/${data}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return getData;
});

const sliceData = createSlice({
  name: "data",
  initialState: {
    image: [],
    status: null,
  },
  reducers: {
    post(state, { payload }) {
      getData(payload);
    },
    [getData.pending]: (state, { payload }) => {
      state.status = "loading";
    },
    add(state, { payload }) {
      // for state is array for add to array use Methode push
      state.image.push(payload);
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.image = payload;
      state.status = "success";
    },
    [getData.rejected]: (state, { payload }) => {
      state.status = "filled ):";
    },
  },
});
export const { add, post } = sliceData.actions;
export default sliceData.reducer;
