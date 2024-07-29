import React, { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./Calendar.css"; // Custom CSS for styling
import { Flex } from "@mantine/core";

const events = [
  {
    title: "Начало проекта",
    start: "2023-07-10T08:00:00",
    end: "2023-07-10T09:00:00",
    color: "gray",
  },
  {
    title: "Творческая мастерская",
    start: "2023-07-10T09:00:00",
    end: "2023-07-10T11:00:00",
    color: "orange",
  },
  {
    title: "Счастливый час",
    start: "2023-07-10T13:00:00",
    end: "2023-07-10T14:00:00",
    color: "yellow",
  },
  {
    title: "Один на один",
    start: "2023-07-10T15:00:00",
    end: "2023-07-10T16:00:00",
    color: "red",
  },
];

const CalendarUI = () => {
  const [currentDate, setCurrentDate] = useState(new Date("2023-07-10"));
  const [view, setView] = useState("day");
  const calendarRef = React.createRef();

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  const getEventsForCurrentDay = () => {
    return events.filter(
      (event) =>
        new Date(event.start).toDateString() === currentDate.toDateString()
    );
  };

  const getEventsForCurrentWeek = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return events.filter(
      (event) =>
        new Date(event.start) >= startOfWeek &&
        new Date(event.start) <= endOfWeek
    );
  };

  const getEventsForCurrentMonth = () => {
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    return events.filter(
      (event) =>
        new Date(event.start) >= startOfMonth &&
        new Date(event.start) <= endOfMonth
    );
  };

  const hoursInDay = () => {
    return Array.from({ length: 24 }, (_, i) => {
      let hour = i;
      let period = "AM";
      if (i >= 12) {
        period = "PM";
      }
      if (i === 0) {
        hour = 12;
      } else if (i > 12) {
        hour = i - 12;
      }
      return `${hour.toString().padStart(2, "0")}:00 ${period}`;
    });
  };

  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = (date) => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const addDays = (days, day, end, increment) =>
      day > end
        ? days
        : addDays(
            [...days, new Date(day)],
            new Date(day.setDate(day.getDate() + increment)),
            end,
            increment
          );

    const prevDays = (days, day, count) =>
      count === 0
        ? days
        : prevDays(
            [...days, new Date(day)],
            new Date(day.setDate(day.getDate() - 1)),
            count - 1
          );

    const nextDays = (days, day, count) =>
      count === 0
        ? days
        : nextDays(
            [...days, new Date(day)],
            new Date(day.setDate(day.getDate() + 1)),
            count - 1
          );

    const startOfPrevMonth = new Date(start);
    startOfPrevMonth.setDate(startOfPrevMonth.getDate() - start.getDay());

    const days = [
      ...prevDays([], startOfPrevMonth, start.getDay()),
      ...addDays([], start, end, 1),
      ...nextDays([], end, 35 - start.getDay() - end.getDate()),
    ];

    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <Flex className="calendar-header-left">
          <h2 onClick={() => {
            console.log(calendarRef.current.click());
          }}>
            {currentDate.toLocaleString("ru", {
              weekday: "short",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </h2>
          <DatePickerInput
            value={currentDate}
            onChange={setCurrentDate}
            dropdownType="modal"
            ref={calendarRef}
            display="none"
          />
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setDate(currentDate.getDate() - 1))
              )
            }
          >
            <span role="img" aria-label="arrow-left">
              ⬅️
            </span>
          </button>

          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setDate(currentDate.getDate() + 1))
              )
            }
          >
            <span role="img" aria-label="arrow-right">
              ➡️
            </span>
          </button>
          <button onClick={() => setCurrentDate(new Date())}>Сегодня</button>
        </Flex>
        <div>
          <button onClick={() => setView("day")}>День</button>
          <button onClick={() => setView("week")}>Неделя</button>
          <button onClick={() => setView("month")}>Месяц</button>
        </div>
      </div>
      {view === "day" && (
        <div className="calendar-grid">
          {hoursInDay().map((time, i) => (
            <div key={i} className="calendar-hour hour-inner">
              <span>{time}</span>
            </div>
          ))}
          {getEventsForCurrentDay().map((event, index) => (
            <div
              key={index}
              className="calendar-event"
              style={{
                top: `${
                  new Date(event.start).getHours() * 60 +
                  new Date(event.start).getMinutes()
                }px`,
                height: `${
                  (new Date(event.end) - new Date(event.start)) / 60000 - 4
                }px`,
                backgroundColor: event.color,
              }}
            >
              <strong>{event.title}</strong>
              <br />
              {formatTime(new Date(event.start))} -{" "}
              {formatTime(new Date(event.end))}
            </div>
          ))}
        </div>
      )}
      {view === "week" && (
        <div className="calendar-grid-week">
          <div className="calendar-hours-column">
            {hoursInDay().map((time, i) => (
              <div key={i} className="calendar-hour hour-inner">
                <span>{time}</span>
              </div>
            ))}
          </div>
          {daysInWeek.map((day, dayIndex) => (
            <div key={day} className="calendar-day-week">
              {hoursInDay().map((_, hourIndex) => (
                <div key={hourIndex} className="calendar-hour-week hour-inner">
                  {getEventsForCurrentWeek()
                    .filter((event) => {
                      const eventDate = new Date(event.start);
                      return (
                        eventDate.getDay() === dayIndex &&
                        eventDate.getHours() === hourIndex
                      );
                    })
                    .map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="calendar-event-week"
                        style={{
                          top: `${new Date(event.start).getMinutes()}px`,
                          height: `${
                            (new Date(event.end) - new Date(event.start)) /
                              60000 -
                            4
                          }px`,
                          backgroundColor: event.color,
                        }}
                      >
                        <strong>{event.title}</strong>
                        <br />
                        {formatTime(new Date(event.start))} -{" "}
                        {formatTime(new Date(event.end))}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {view === "month" && (
        <div className="calendar-grid-month">
          {daysInMonth(currentDate).map((day, i) => (
            <div
              key={i}
              className={`calendar-day-month ${
                day.getMonth() !== currentDate.getMonth() ? "other-month" : ""
              }`}
            >
              <span>{day.getDate()}</span>
              {getEventsForCurrentMonth()
                .filter(
                  (event) =>
                    new Date(event.start).getDate() === day.getDate() &&
                    new Date(event.start).getMonth() === day.getMonth()
                )
                .map((event, index) => (
                  <div
                    key={index}
                    className="calendar-event-month"
                    style={{
                      backgroundColor: event.color,
                    }}
                  >
                    <strong>{event.title}</strong>
                    <br />
                    {formatTime(new Date(event.start))} -{" "}
                    {formatTime(new Date(event.end))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarUI;
