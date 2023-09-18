import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IErrorData, IResponseTaskByIdData } from "../../types/types";
import {
  addTask,
  deleteTask,
  editTask,
  fetchTaskById,
  fetchUserTasks,
} from "./tasksOperations";
import { logOut } from "../user/authOperations";

export interface TaskState {
  tasks: [];
  taskById: IResponseTaskByIdData;
  isLoading: boolean;
  error: {} | null;
  message: string;
}

const initialState: TaskState = {
  tasks: [],
  taskById: {},
  isLoading: false,
  error: null,
  message: "",
};

const pendingReducer = (state: TaskState) => {
  state.isLoading = true;
};
const rejectedReducer = (
  state: TaskState,
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

const TaskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    clearTaskById: (state) => {
      state.taskById = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "Task added successfully";
      })
      .addCase(fetchUserTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.taskById = action.payload;
        state.isLoading = false;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "Task edited successfully";
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        // state.message = action.payload.message;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.tasks = [];
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

export const { clearTaskById } = TaskSlice.actions;
export const TaskReducer = TaskSlice.reducer;
