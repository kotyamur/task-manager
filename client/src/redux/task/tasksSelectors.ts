import type { RootState } from "../store";

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const selectTaskById = (state: RootState) =>
  state.tasks.taskById;
export const selectIsLoading = (state: RootState) => state.tasks.isLoading;
export const selectError = (state: RootState) => state.tasks.error;
