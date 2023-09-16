import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contacts/contactsSlice";
// import { filterReducer } from "./contacts/filterSlice";
import { authReducer } from "./user/authSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const middleware = (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   });

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["access_token"],
};

const reducers = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: reducers,
//   middleware,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


