import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";

const store = configureStore({
  reducer: {
    // All state reducer slice to be added here
    todos: todoReducer,
  },
});

export default store;
