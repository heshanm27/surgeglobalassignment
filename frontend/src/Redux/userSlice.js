import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../DefaultAxios/defultaxios";

export const SignInUser = createAsyncThunk(
  "user/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await publicRequest.post(`auth/signIn`, {
        email: credentials.email,
        password: credentials.password,
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    loggedIn: false,
    pending: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    logout: (state) => {
      state.userInfo = {};
      state.loggedIn = false;
    },
  },
  extraReducers: {
    [SignInUser.pending]: (state, action) => {
      state.pending = true;
      state.error = false;
      state.errorMessage = "";
    },
    [SignInUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.loggedIn = true;
      state.userInfo = action.payload;
    },
    [SignInUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
      state.loggedIn = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
