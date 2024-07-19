import React, { useCallback, useEffect, useState } from "react";
import * as icon from "../../assets/svgs/index";
import moment from "moment";
import "./Calendar.css";
import { useCalendar } from "../../redux/useSelector";
import { getRequest } from "../../service/api";
import { setCalendar } from "../../redux/calendarSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/loaderSlice";

const dayArray = [
  {
    time: "1 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "2 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "3 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "4 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "5 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "6 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "7 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "8 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "9 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "10 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "11 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "12 AM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "1 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "2 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "3 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "4 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "5 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "6 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "7 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "8 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "9 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "10 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
  {
    time: "11 PM",
    data: { description: "", startTime: "", finishTime: "" },
  },
];
const weekArray = [
  {
    children: [
      { title: "ПН", day: "17" },
      { title: "ВТ", day: "10" },
      { title: "СР", day: "10" },
      { title: "ЧТ", day: "10" },
      { title: "ПТ", day: "10" },
      { title: "СБ", day: "10" },
      { title: "ВС", day: "10" },
    ],
  },
  {
    children: [
      {
        time: "1 AM",
      },
      {
        time: "2 AM",
      },
      {
        time: "3 AM",
      },
      {
        time: "4 AM",
      },
      {
        time: "5 AM",
      },
      {
        time: "6 AM",
      },
      {
        time: "7 AM",
      },
      {
        time: "8 AM",
      },
      {
        time: "9 AM",
      },
      {
        time: "10 AM",
      },
      {
        time: "11 AM",
      },
      {
        time: "12 AM",
      },
      {
        time: "1 PM",
      },
      {
        time: "2 PM",
      },
      {
        time: "3 PM",
      },
      {
        time: "4 PM",
      },
      {
        time: "5 PM",
      },
      {
        time: "6 PM",
      },
      {
        time: "7 PM",
      },
      {
        time: "8 PM",
      },
      {
        time: "9 PM",
      },
      {
        time: "10 PM",
      },
      {
        time: "11 PM",
      },
    ],
  },
];
const monthArray = [
  { date: "26", data: [{ description: "Tugulgan kun", time: "15:00" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
  { date: "26", data: [{ description: "", time: "" }] },
];
const Dates = [
  [
    { index: 1, kun: "Понедельник" },
    { index: 2, kun: "Вторник" },
    { index: 3, kun: "Среда" },
    { index: 4, kun: "Четверг" },
    { index: 5, kun: "Пятница" },
    { index: 6, kun: "Суббота" },
    { index: 7, kun: "Воскресенье" },
  ],
  [
    { index: 1, oy: "Январь" },
    { index: 2, oy: "Февраль" },
    { index: 3, oy: "Март" },
    { index: 4, oy: "Апрель" },
    { index: 5, oy: "Май" },
    { index: 6, oy: "Июнь" },
    { index: 7, oy: "Июль" },
    { index: 8, oy: "Август" },
    { index: 9, oy: "Сентябрь" },
    { index: 10, oy: "Октябрь" },
    { index: 11, oy: "Ноябрь" },
    { index: 12, oy: "Декабрь" },
  ],
];

const Calendar = () => {
  const calendar = useCalendar();
  const [arrowActive, setArrowActive] = useState("day");
  const dispatch = useDispatch();

  const changeArrow = (name) => {
    setArrowActive(name);
    localStorage.setItem("arrow", name);
  };

  useEffect(() => {
    if (localStorage.getItem("arrow")) {
      setArrowActive(localStorage.getItem("arrow"));
    } else {
      setArrowActive(arrowActive);
    }
  }, [arrowActive, setArrowActive]);

  const token = localStorage.getItem("token");
  const getReports = useCallback(() => {
    dispatch(setLoader(true))
    getRequest("meetings", token)
      .then(({ data }) => {
        toast.success("Meetings пришол");
        dispatch(setCalendar(data.data));
    dispatch(setLoader(false))

      })
      .catch((error) => {
        console.error("Xato", error);
        toast.error(error.message ? error.message : "Xatolik yuz berdi");
    dispatch(setLoader(false))

      });
  }, [token, dispatch]);

  useEffect(() => {
    if (calendar.length === 0) {
      getReports();
    }
  }, [getReports, calendar.length]);

  return (
    <div className="calender-container">
      <nav className="calendar-navbar">
        <div className="nav-left">
          <h1>
            {Dates[0].filter((f) => f.index === moment().day())[0]?.kun},{" "}
            {moment().date()}{" "}
            {Dates[1].filter((f) => f.index === moment().month())[0]?.oy}{" "}
            {moment().year()} г.
          </h1>
          <button className="nav-arrow">
            <icon.ArrowLeft />
          </button>
          <button className="nav-arrow">
            <icon.ArrowRight />
          </button>
          <button className="nav-btn">Сегодня</button>
          <button className="nav-btn">
            Все <icon.ArrowDown />
          </button>
        </div>
        <div className="nav-right">
          <button
            className={arrowActive === "day" ? "active" : ""}
            onClick={() => changeArrow("day")}
          >
            День
          </button>
          <button
            className={arrowActive === "week" ? "active" : ""}
            onClick={() => changeArrow("week")}
          >
            Неделя
          </button>
          <button
            className={arrowActive === "month" ? "active" : ""}
            onClick={() => changeArrow("month")}
          >
            Месяц
          </button>
        </div>
      </nav>
      {/* <table className="table-calendar">
        <tbody>
            {
              dayArray.map((item,index)=>{
                return <tr  key={index}>
                  <td className="td-time">{item.time}</td>
                  <td className="td-input">{item.data.description === ""?"":item.data.description}</td>
                </tr>
              })
            }
        </tbody>
      </table>
        <div className="table-calendar">
          <div className="tabel-head">
               <h1></h1>
              {weekArray[0].children.map((item,index)=>{
                return <h1 key={index}> <span className={item.day === moment().date().toString() ? "active":""}>{item.day}</span> <br /> {item.title}</h1>
              })}
          </div>
          <div className="tabel-body">
          {
              weekArray[1].children.map((item,index)=>{
                return <div className="tr" key={index}>
                  <td className="td-time">{item.time}</td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                </div>
              })
            }
          </div>
        </div>
        <div className="table-calendar2">
          <div className="table-calendar2-head">
            {weekArray[0].children.map((item,index)=>{
              return <h1 key={index} className={item.day === moment().date().toString() ? "active" : ""}>{item.title}</h1>
            })}
          </div>
          <div className="table-calendar2-body">
            {monthArray.map((item,index)=>{
              return <div key={index} className="body-card">
                <h1>{item.date}</h1>
                <div className={item.data[index]?.description ? "description":""}><p><span>{item.data[index]?.time}</span>{item.data[index]?.description}</p></div>
              </div>
            })}
          </div>
        </div> */}
      {arrowActive === "day" ? (
        <table className="table-calendar">
          <tbody>
            {dayArray.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="td-time">{item.time}</td>
                  <td className="td-input">
                    {item.data.description === "" ? "" : item.data.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
      {arrowActive === "week" ? (
        <div className="table-calendar">
          <div className="tabel-head">
            {weekArray[0].children.map((item, index) => {
              return (
                <h1 key={index}>
                  {" "}
                  <span
                    className={
                      item.day === moment().date().toString() ? "active" : ""
                    }
                  >
                    {item.day}
                  </span>{" "}
                  <br /> {item.title}
                </h1>
              );
            })}
          </div>
          <div className="tabel-body">
            {weekArray[1].children.map((item, index) => {
              return (
                <div className="tr" key={index}>
                  <td className="td-time">{item.time}</td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                  <td className="td-input"></td>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {arrowActive === "month" ? (
        <div className="table-calendar2">
          <div className="table-calendar2-head">
            {weekArray[0].children.map((item, index) => {
              return (
                <h1
                  key={index}
                  className={
                    item.day === moment().date().toString() ? "active" : ""
                  }
                >
                  {item.title}
                </h1>
              );
            })}
          </div>
          <div className="table-calendar2-body">
            {monthArray.map((item, index) => {
              return (
                <div key={index} className="body-card">
                  <h1>{item.date}</h1>
                  <div
                    className={
                      item.data[index]?.description ? "description" : ""
                    }
                  >
                    <p>
                      <span>{item.data[index]?.time}</span>
                      {item.data[index]?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Calendar;
