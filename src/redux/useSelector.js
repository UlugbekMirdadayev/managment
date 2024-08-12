import { useSelector } from "react-redux";

export const useUser = () => useSelector(({ user }) => user);
export const useCalendar = () => useSelector(({ calendar }) => calendar);
export const useReport = () => useSelector(({ report }) => report);
export const useLoader = () => useSelector(({ loader }) => loader);
export const useTask = () => useSelector(({ task }) => task);
export const useModal = () => useSelector(({ modal }) => modal);
export const useCreateModal = () => useSelector(({ modalCalendar }) => modalCalendar);
export const useUpdate = () => useSelector(({ update }) => update);
