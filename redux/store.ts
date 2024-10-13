// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modal.slice"; // Import the modal slice reducer

export const store = configureStore({
  reducer: {
    modal: modalReducer, // Add modal slice to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
