import { useSelector } from "react-redux";

export const useUser = () => useSelector(({ user }) => user);
export const useCalendar = () => useSelector(({ calendar }) => calendar);
