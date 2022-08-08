import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../DefaultAxios/defultaxios";

export const SignInUser = createAsyncThunk(
  "user/signIn",
  async (credentials) => {
    const res = await publicRequest.post(`auth/signIn`, {
      email: credentials.email,
      password: credentials.password,
    });
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    pending: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    logout: (state) => {
      state.userInfo = {};
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
      state.userInfo = action.payload;
    },
    [SignInUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
      console.log(action.error, "lol");
      state.errorMessage = "hello";
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
