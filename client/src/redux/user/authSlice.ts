import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./authOperations";
import { IErrorData } from "../../types/types";

export interface AuthState {
  user: {};
  access_token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: {} | null;
}
// export interface IErrorData {
//   message: [] | string;
//   error: string;
//   statusCode: number;
// }

const initialState: AuthState = {
  user: {},
  access_token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const pendingReducer = (state: AuthState) => {
  state.isLoading = true;
};
const rejectedReducer = (
  state: AuthState,
  action: PayloadAction<IErrorData>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.payload || "An error occurred";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {};
        state.access_token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = action.payload || "An error occurred";
      })
      .addMatcher((action) => action.type.endsWith("/pending"), pendingReducer)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        rejectedReducer
      );
  },
  // extraReducers: {
  //   // * REGISTER
  //   [register.pending.type]: (state: AuthState) => {
  //     state.loading = true;
  //     state.isLoggedIn = false;
  //   },
  //   [register.fulfilled.type]: (
  //     state: AuthState,
  //     action: PayloadAction<AuthState>
  //   ) => {
  //     state.loading = false;
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [register.rejected.type]: (
  //     state: AuthState,
  //     action: PayloadAction<IErrorData>
  //   ) => {
  //     state.loading = false;
  //     state.isLoggedIn = false;
  //     state.error = action.payload.message || "An error occurred";
  //   },
  //   // * LOGIN
  //   [logIn.pending.type]: (state: AuthState) => {
  //     state.loading = true;
  //   },
  //   [logIn.fulfilled.type]: (
  //     state: AuthState,
  //     action: PayloadAction<AuthState>
  //   ) => {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //     state.loading = false;
  //   },
  //   [logIn.rejected.type]: (
  //     state: AuthState,
  //     action: PayloadAction<IErrorData>
  //   ) => {
  //     state.loading = false;
  //     state.isLoggedIn = false;
  //     state.error = action.payload.message || "An error occurred";
  //   },
  //   // * LOGOUT
  //   [logOut.pending.type]: (state: AuthState) => {
  //     state.loading = true;
  //     state.error = null;
  //   },
  //   [logOut.fulfilled.type]: (state: AuthState) => {
  //     state.user = {};
  //     state.token = null;
  //     state.isLoggedIn = false;
  //     state.loading = false;
  //   },
  //   [logOut.rejected.type]: (
  //     state: AuthState,
  //     action: PayloadAction<IErrorData>
  //   ) => {
  //     state.loading = false;
  //     state.error = action.payload.message || "An error occurred";
  //   },
  //   // * GET USER
  //   [refreshUser.pending.type]: (state: AuthState) => {
  //     state.loading = true;
  //     state.isRefreshing = true;
  //     state.error = null;
  //   },
  //   [refreshUser.fulfilled.type]: (
  //     state: AuthState,
  //     action: PayloadAction<object>
  //   ) => {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //     state.isRefreshing = false;
  //   },
  //   [refreshUser.rejected.type]: (
  //     state: AuthState,
  //     action: PayloadAction<IErrorData>
  //   ) => {
  //     state.loading = false;
  //     state.isRefreshing = false;
  //     state.error = action.payload.message || "An error occurred";
  //   },
  // },
});

export const authReducer = authSlice.reducer;
