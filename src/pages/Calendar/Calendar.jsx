import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarPicker from "../../components/CalendarPicker";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./Calendar.css"; // Пользовательский CSS для стилизации

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <CalendarPicker date={date} setDate={setDate} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        views={{
          timeGrid: {
            slotDuration: "01:00:00",
            slotLabelInterval: "01:00:00",
            allDaySlot: false,
          },
          dayGridMonth: {
            titleFormat: { year: "numeric", month: "long" },
          },
        }}
        datesSet={(dateInfo) => setDate(dateInfo.start)}
        titleFormat={{ year: "numeric", month: "long", day: "numeric" }}
        titleRangeSeparator=" - "
        timeHint="Время"
        locale="ru" // Установка русского языка
        events={[
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
          {
            title: "Еженедельная встреча",
            start: "2023-07-14T13:00:00",
            end: "2023-07-14T14:00:00",
            color: "blue",
          },
        ]}
      />
    </div>
  );
};

export default Calendar;
