import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IErrorData } from "../../types/types";
import { addCategory, deleteCategory, editCategory, fetchCategoryById, fetchUserCategories } from "./categoriesOperations";
import { logOut } from "../user/authOperations";

export interface CategoryState {
  categories: [];
  categoryById: {};
  isLoading: boolean;
  error: {} | null;
  message: string;
}

const initialState: CategoryState = {
  categories: [],
  categoryById: {},
  isLoading: false,
  error: null,
  message: '',
};

const pendingReducer = (state: CategoryState) => {
  state.isLoading = true;
};
const rejectedReducer = (
  state: CategoryState,
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

const categorySlice = createSlice({
  name: "categories",
  initialState,

  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryById = action.payload;
      })
      .addCase(fetchUserCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.categoryById = action.payload;
        state.isLoading = false;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryById = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.categories = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), pendingReducer)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        rejectedReducer
      );
  },
});

export const categoryReducer = categorySlice.reducer;
