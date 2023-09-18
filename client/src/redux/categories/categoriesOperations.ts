import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IErrorData, IAddCategoryData, IEditCategoryData, IResponseCategoryByIdData, IResponseDeleteCategoryData, IResponseEditCategoryData } from "../../types/types";

axios.defaults.baseURL = "http://localhost:4000/api/";

// export const register = createAsyncThunk<
//   IResponseUserData,
//   IRegisterLoginUserData,
//   {
//     rejectValue: MyKnownError;
//   }
// >("auth/register", async (credentials: IRegisterLoginUserData, thunkAPI) => {
//   try {
//     const res = await axios.post<IResponseUserData>("/users", credentials);
//     return res.data as IResponseUserData;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error as MyKnownError);
//   }
// });

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category: IAddCategoryData, thunkAPI) => {
    try {
      const response = await axios.post("/categories", category);
      return response.data as IAddCategoryData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const fetchUserCategories = createAsyncThunk(
  "categories/fetchUserCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories");
      return response.data as [];
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const fetchCategoryById = createAsyncThunk(
  "categories/fetchCategoryById",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get(`/categories/${id}`);
      return response.data as IResponseCategoryByIdData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const editCategory = createAsyncThunk(
  "categories/editCategory",
    async (data: IEditCategoryData, thunkAPI) => {
    try {
      const response = await axios.patch(`/categories/${data.id}`, {name: data.name});
      return response.data as IResponseEditCategoryData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.delete(`/categories/${id}`);
      return response.data as IResponseDeleteCategoryData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as IErrorData);
    }
  }
);