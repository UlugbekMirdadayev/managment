import { createSlice } from "@reduxjs/toolkit";

const ModalCalendarSlice = createSlice({
  name: "modal-create-calendar",
  initialState: false,
  reducers: {
    setModalCalendar(_, { payload }) {
      return payload;
    },
  },
});

export const { setModalCalendar } = ModalCalendarSlice.actions;
export default ModalCalendarSlice.reducer;
