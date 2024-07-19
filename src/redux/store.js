import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import calendar from "./calendarSlice";

export default configureStore({
  reducer: {
    user,
    calendar,
  },
});
