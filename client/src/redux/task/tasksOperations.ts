import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IErrorData,
  IAddTaskData,
  IResponseTaskByIdData,
  IEditTaskData,
  IResponseEditTaskData,
  IResponseDeleteTaskData,
} from "../../types/types";

axios.defaults.baseURL = "http://localhost:4000/api/";

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: IAddTaskData, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", task);
      return response.data as IAddTaskData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const fetchUserTasks = createAsyncThunk(
  "tasks/fetchUsertasks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data as [];
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const fetchTaskById = createAsyncThunk(
  "tasks/fetchTaskById",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${id}`);
      return response.data as IResponseTaskByIdData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async (data: IEditTaskData, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${data.id}`, data.task);
      return response.data as IResponseEditTaskData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data as IResponseDeleteTaskData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);
