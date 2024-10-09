// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice/employees";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// // src/redux/store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
// import { loadingMiddleware } from "./middlewares/loading.middleware";
// import { persistedReducer } from "./rootReducer";

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Disable serializable check for persist
//     }).concat(loadingMiddleware),
// });

// // Define RootState and AppDispatch types
// export type RootState = ReturnType<typeof store.getState>; // Type for RootState
// export type AppDispatch = typeof store.dispatch; // Type for Dispatch

// export const persistor = persistStore(store); // Export the persistor
// export default store;
