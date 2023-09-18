import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./categories/categoriesSlice";
import { TaskReducer } from "./task/tasksSlice";
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
  categories: categoryReducer,
  tasks: TaskReducer,
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


