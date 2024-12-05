import React, { useCallback, useEffect, useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./Calendar.css"; // Custom CSS for styling
import { Flex } from "@mantine/core";
import { ArrowLeft, ArrowRight } from "../../assets/svgs";
import { getRequest } from "../../service/api";
import { useUser } from "../../redux/useSelector";
import MoreDetailsModal from "./details";
import { formatTime } from "../../utils";
import Create from "./create";
import { useDispatch } from "react-redux";
import { setModalCalendar } from "../../redux/modalCalendarSlice";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

// Zoom, Telegram, Google Meet

const colors = {
  zoom: "#2d8cf0",
  telegram: "#0088cc",
  googleMeet: "#fbbc05",
  badge: {
    googleMeet: { color: "#fe763e", bg: "#fff4f0" },
    telegram: { color: "#0088cc", bg: "#e7f3f9" },
    zoom: { color: "#2d8cf0", bg: "#e6f7ff" },
  },
};

const CalendarUI = () => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("day");
  const calendarRef = React.createRef();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [fullView, setFullView] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [updateEvent, setUpdateEvent] = useState({});
  const [eventObject, setEventObject] = useState({});

  const user = useUser();

  const getEvents = useCallback(() => {
    getRequest("meetings", user?.token)
      .then(({ data }) => {
        setEvents(
          data?.data?.map((event) => ({
            ...event,
            title: event?.meeting_name,
            start: `${event?.date}T${event?.time?.split(" - ")[0]}:00`,
            end: `${event?.date}T${event?.time?.split(" - ")[1]}:00`,
            place_meeting: event?.place_meeting,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.token]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const filterEvents = (start, end) => {
    return events?.filter(
      (event) => new Date(event.start) >= start && new Date(event.start) <= end
    );
  };

  const getEventsForCurrentDay = () => {
    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    return filterEvents(startOfDay, endOfDay);
  };

  const getEventsForCurrentWeek = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return filterEvents(startOfWeek, endOfWeek);
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

    return filterEvents(startOfMonth, endOfMonth);
  };

  const hoursInDay = () => {
    return Array.from({ length: 24 }, (_, i) => {
      const hour = i % 12 || 12;
      const period = i >= 12 ? "PM" : "AM";
      return `${hour.toString().padStart(2, "0")}:00 ${period}`;
    });
  };

  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = (date) => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const days = [];
    const startOfPrevMonth = new Date(start);
    startOfPrevMonth.setDate(startOfPrevMonth.getDate() - start.getDay());

    for (let i = 0; i < start.getDay(); i++) {
      days.push(new Date(startOfPrevMonth));
      startOfPrevMonth.setDate(startOfPrevMonth.getDate() + 1);
    }

    for (let i = start.getDate(); i <= end.getDate(); i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    const nextMonthStart = new Date(end);
    nextMonthStart.setDate(nextMonthStart.getDate() + 1);

    while (days.length % 7 !== 0) {
      days.push(new Date(nextMonthStart));
      nextMonthStart.setDate(nextMonthStart.getDate() + 1);
    }

    return days;
  };

  const handleNavigation = (days) => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + days)));
  };

  const handleEventClick = (event) => {
    setOpenModal(true);
    setSelectedEvent(event);
  };

  // weekDays Array of days in a week (Sun 4, Mon 5, Tue 6, Wed 7, Thu 8, Fri 9, Sat 10)
  const weekDays = daysInWeek.map((_, i) => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + i);
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setHours(23, 59, 59, 999);

    return startOfWeek;
  });

  return (
    <div className="calendar">
      <MoreDetailsModal
        event={selectedEvent}
        onChangeView={() => setFullView(!fullView)}
        onClose={() => {
          setFullView(false);
          setOpenModal(false);
        }}
        fullView={fullView}
        visible={openModal}
        colors={colors}
        user={user}
        setEventObject={setEventObject}
        eventObject={eventObject}
        onUpdate={(event) => {
          setUpdateEvent(event);
          dispatch(setModalCalendar(true));
          setOpenModal(false);
        }}
      />
      <Create
        values={updateEvent}
        getEvents={getEvents}
        setEventObject={setEventObject}
        setUpdateEvent={setUpdateEvent}
      />
      <div className="calendar-header">
        <Flex className="calendar-header-top" justify={"space-between"}>
          <Flex className="calendar-header-left">
            <h2
              className={`calendar-picker ${view === "week" ? "week-view-calendar-current-date" : ""}`}
              onClick={() => calendarRef.current.click()}
            >
              {view === "week"
                ? `${moment(currentDate).format("MMMM YYYY")}г.`
                : currentDate.toLocaleString("ru", {
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
              size="lg"
            />
            <button
              className="calendar-header-arrow"
              onClick={() => handleNavigation(-1)}
            >
              <span role="img" aria-label="arrow-left">
                <ArrowLeft />
              </span>
            </button>
            <button
              className="calendar-header-arrow calendar-header-next-arrow"
              onClick={() => handleNavigation(1)}
            >
              <span role="img" aria-label="arrowRight">
                <ArrowRight />
              </span>
            </button>
            <button
              className="today-navigation"
              onClick={() => setCurrentDate(new Date())}
            >
              Сегодня
            </button>
          </Flex>
          <div className="link-navigations">
            <button
              className={`link-navigation ${view === "day" ? "active" : ""}`}
              onClick={() => setView("day")}
            >
              День
            </button>
            <button
              className={`link-navigation ${view === "week" ? "active" : ""}`}
              onClick={() => setView("week")}
            >
              Неделя
            </button>
            <button
              className={`link-navigation ${view === "month" ? "active" : ""}`}
              onClick={() => setView("month")}
            >
              Месяц
            </button>
          </div>
        </Flex>
        {view === "week" && (
          <div className="week-days-header">
            {weekDays.map((day, i) => (
              <div
                key={i}
                className={`week-day-header
                ${
                  new Date().getDay() === new Date(day).getDay() &&
                  new Date().getDate() === new Date(day).getDate() &&
                  new Date().getMonth() === new Date(day).getMonth() &&
                  new Date().getFullYear() === new Date(day).getFullYear()
                    ? "today-day"
                    : ""
                }
                ${
                  new Date(day).getDay() === new Date(currentDate).getDay()
                    ? "current-day"
                    : ""
                }
                `}
                onClick={() => setCurrentDate(new Date(day))}
              >
                <span className="index">{moment(day).format("DD")}</span>
                <span className="day-name">{daysInWeek[i]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {view === "day" && (
        <div className="calendar-grid">
          {hoursInDay()?.map((time, i) => (
            <div key={i} className="calendar-hour hour-inner">
              <span>{time}</span>
            </div>
          ))}
          {getEventsForCurrentDay()?.map((event, index) => (
            <div
              key={index}
              className={`calendar-event  ${
                (new Date(event.end) - new Date(event.start)) / 60000 - 4 <
                  30 && "small-event-box"
              }`}
              onClick={() => handleEventClick(event)}
              style={{
                top: `${
                  new Date(event.start).getHours() * 60 +
                  new Date(event.start).getMinutes()
                }px`,
                height: `${
                  (new Date(event.end) - new Date(event.start)) / 60000 - 4
                }px`,
                backgroundColor: colors[event?.place_meeting],
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
            {hoursInDay()?.map((time, i) => (
              <div key={i} className="calendar-hour hour-inner">
                <span>{time}</span>
              </div>
            ))}
          </div>
          {daysInWeek?.map((day, dayIndex) => (
            <div key={day} className="calendar-day-week">
              {hoursInDay()?.map((_, hourIndex) => (
                <div key={hourIndex} className="calendar-hour-week hour-inner">
                  {getEventsForCurrentWeek()
                    ?.filter((event) => {
                      const eventDate = new Date(event.start);
                      return (
                        eventDate.getDay() === dayIndex &&
                        eventDate.getHours() === hourIndex
                      );
                    })
                    ?.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`calendar-event-week ${
                          (new Date(event.end) - new Date(event.start)) /
                            60000 -
                            4 <
                            30 && "small-event-box"
                        }`}
                        onClick={() => handleEventClick(event)}
                        style={{
                          top: `${new Date(event.start).getMinutes()}px`,
                          height: `${
                            (new Date(event.end) - new Date(event.start)) /
                              60000 -
                            4
                          }px`,
                          backgroundColor: colors[event?.place_meeting],
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
          {daysInMonth(currentDate)?.map((day, i) => (
            <div
              key={i}
              className={`calendar-day-month ${
                day.getMonth() !== currentDate.getMonth() ? "other-month" : ""
              }`}
            >
              <span>{day.getDate()}</span>
              {getEventsForCurrentMonth()
                ?.filter(
                  (event) =>
                    new Date(event.start).getDate() === day.getDate() &&
                    new Date(event.start).getMonth() === day.getMonth()
                )
                ?.map((event, index) => (
                  <div
                    key={index}
                    className="calendar-event-month"
                    onClick={() => handleEventClick(event)}
                    style={{
                      backgroundColor: colors[event?.place_meeting],
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
