import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI, setAuthHeader } from '../../services/API';

export const requestRegister = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.register(formData);
      // { user: {name: 'user_name', email: 'user_email@gmail.com'}, token: "..."}
      // response?.token && localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestLogin = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.login(formData);
      // { user: {name: 'user_name', email: 'user_email@gmail.com'}, token: "..."}
      // response?.token && localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestLogout = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.logout();
      // localStorage.removeItem('token');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestRefreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await UserAPI.refresh();
      // { name: 'user_name', email: 'user_email@gmail.com' }
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
