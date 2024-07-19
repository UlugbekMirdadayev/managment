import * as icon from "../assets/svgs/index";
import Calendar from "../pages/Calendar/Calendar";
import ReportForm from "../pages/Reports/Report-form/ReportForm";
import Reports from "../pages/Reports/Reports";
import Task from "../pages/Task/Task";
import TaskForm from "../pages/Task/Task-form/TaskForm";
import Ticket from "../pages/Ticket/Ticket";
import AddUser from "../pages/User/createUser/createUser";
import User from "../pages/User/User";

export const routes = [
  { path: "/", component: <Calendar /> },
  { path: "/task", component: <Task /> },
  { path: "/reports", component: <Reports /> },
  { path: "/ticket", component: <Ticket /> },
  { path: "/users", component: <User /> },
  {
    path: "/createUser",
    component: (
      <>
        <AddUser />
      </>
    ),
  },
];

export const listHaed = [
  { icon: icon.CalendarIcon, path: "/", title: "Календарь" },
  { icon: icon.TaskIcon, path: "/task", title: "Задачи" },
  { icon: icon.Reports, path: "/reports", title: "Отчеты" },
  { icon: icon.Ticket, path: "/ticket", title: "Тикет" },
];

export const extraListHead = [
  {
    path: "/users",
    title: "Все пользователи",
  },
];


export const modals = [
  { path: "/task", component: TaskForm },
  { path: "/reports", component: ReportForm },
];

export const FakeTickets = [
  {
    status: "Новые",
    arrow: false,
    children: [
      {
        id: 123,
        date: "17.07.2024",
        status: "Новый",
        proekt: "Lorem",
        group: "Link telegram",
        NameTicket: "Link telegram",
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    status: "Открыты",
    arrow: false,

    children: [
      {
        id: 123,
        date: "17.07.2024",
        status: "Открыты",
        proekt: "Lorem",
        group: "Link telegram",
        NameTicket: "Link telegram",
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    status: "Закрыты",
    arrow: false,

    children: [
      {
        id: 123,
        date: "17.07.2024",
        status: "Закрыт",
        proekt: "Lorem",
        group: "Link telegram",
        NameTicket: "Link telegram",
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
];

// export const FakeReport = [
//   {
//     title: "support",
//     arrow: false,
//     children: [
//     ],
//   },
//   {
//     title: "project",
//     arrow: false,
//     children: [
//       {
//         title: "Lorem ipsum",
//         description:
//           "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
//       },
//       {
//         title: "Lorem ipsum",
//         description:
//           "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
//       },
//       {
//         title: "Lorem ipsum",
//         description:
//           "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
//       },
//     ],
//   },
//   {
//     title: "Director",
//     arrow: false,
//     children: [
//       {
//         title: "Lorem ipsum",
//         description:
//           "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
//       },
//       {
//         title: "Lorem ipsum",
//         description:
//           "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
//       },
//       {
//         title: "Lorem ipsum",
//         description:
//           "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
//       },
//     ],
//   },
// ];

export const BASE_URL = `https://calendar-api.remzilab.com/api/`;

export const deletePlus = ["/ticket", "/createUser", "/users"];
export const status_users = ["general_director", "owner"];


export const created_by = [
  "Support","Manager","OWener","Director",
]