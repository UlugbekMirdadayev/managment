import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: [],
  reducers: {
    setCalendar(_, { payload }) {
      return payload;
    },
  },
});

export const { setCalendar } = calendarSlice.actions;

export default calendarSlice.reducer;
