import { configureStore } from "@reduxjs/toolkit";
import sliceDataReduser from "../feacture/data/dataSlice";
export const store = configureStore({
  reducer: {
    data: sliceDataReduser,
  },
});
