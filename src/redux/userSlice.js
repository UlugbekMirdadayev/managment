import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user") || "{}"),
  reducers: {
    setUser(state, action) {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state = action.payload;
    },
    clearUser(state, _) {
      localStorage.clear();
      state = {};
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
