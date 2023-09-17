import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterLoginUserData, IResponseUserData } from "../../types/types";

axios.defaults.baseURL = "http://localhost:4000/api/";

const setAuthHeader = (access_token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};


// interface UserData {
//   email: string;
//   password: string;
// }

interface MyKnownError {

}

export const register = createAsyncThunk<
  IResponseUserData,
  IRegisterLoginUserData,
  {
    rejectValue: MyKnownError;
  }
>("auth/register", async (credentials: IRegisterLoginUserData, thunkAPI) => {
  try {
    const res = await axios.post<IResponseUserData>("/users", credentials);
    setAuthHeader(res.data.access_token);
    return res.data as IResponseUserData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as MyKnownError);
  }
});

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: IRegisterLoginUserData, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      setAuthHeader(res.data.access_token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyKnownError);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error as MyKnownError);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.auth.access_token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/auth/profile");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyKnownError);
    }
  }
);
