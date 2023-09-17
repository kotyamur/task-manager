import type { RootState } from "../store";

export const selectCategories = (state: RootState) => state.category.categories;

export const selectCategoryById = (state: RootState) => state.category.categoryById;
export const selectIsLoading = (state: RootState) => state.category.isLoading;
export const selectError = (state: RootState) => state.category.error;
