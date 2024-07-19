import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import calendar from "./calendarSlice";
import report from "./reportSlice";
import loader from "./loaderSlice";
import task from "./taskSlice";

export default configureStore({
  reducer: {
    user,
    calendar,
    report,
    loader,
    task,
  },
});
