import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../DefaultAxios/defultaxios";

//asyncThunk use to make async request to server and return the response
//in this function user is sending the email,password to the server , get user token and user info
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

//asyncThunk use to make async request to server and return the response
//in this if useris new then send new data to update the user info in the server and get response as updated user info
export const UpdateUserDetails = createAsyncThunk(
  "user/update",
  async (UpdateValues, { rejectWithValue }) => {
    console.log(UpdateValues);
    const updatedata = UpdateValues.updateValue;
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${UpdateValues.token}`,
      },
    };

    try {
      const { data } = await publicRequest.patch(
        `auth/newuser/${UpdateValues.userId}`,
        updatedata,
        axiosConfig
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

//create user slice for redux store
//SignInUser && UpdateUserDetails have eah pending,fulfilled,rejected status
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
    [UpdateUserDetails.pending]: (state, action) => {
      state.error = false;
      state.errorMessage = "";
    },
    [UpdateUserDetails.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [UpdateUserDetails.rejected]: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
