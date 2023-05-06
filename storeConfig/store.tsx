import { configureStore } from "@reduxjs/toolkit";
import count from "./count";
export default configureStore({
  reducer: {
    counter: count,
  },
});
