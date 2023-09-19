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
  state.error =
    {
      message: action.payload?.message,
      error: action.payload?.error,
      statusCode: action.payload?.statusCode,
    } || "An error occurred";
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
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
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
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload || "An error occurred";
      })
      .addMatcher((action) => action.type.endsWith("/pending"), pendingReducer)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        rejectedReducer
      );
  },
});

export const authReducer = authSlice.reducer;
