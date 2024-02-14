import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LoginState {
  apiStatus: "INITIAL" | "SUCCESS" | "FAILURE" | "LOADING";
}

const initialState: LoginState = {
  apiStatus: "INITIAL",
};

export const loginSubmission = createAsyncThunk(
  "login",
  (obj: { email: string; password: string }) => {
    const apiUrl = "https://reqres.in/api/login/";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: obj.email, password: obj.password }),
    };
    return fetch(apiUrl, options)
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
);

export const loginSlice = createSlice({
  name: "loginslice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginSubmission.pending, (state) => {
      state.apiStatus = "LOADING";
    });
    builder.addCase(loginSubmission.fulfilled, (state, action) => {
      state.apiStatus = "SUCCESS";
      localStorage.setItem("token", action.payload.token);
      console.log("success by Redux");
    });
    builder.addCase(loginSubmission.rejected, (state, action) => {
      state.apiStatus = "FAILURE";
      console.log(action.error.message);
    });
  },
});

export default loginSlice.reducer;