import React, { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { Modal, Button } from "@mantine/core";
import "dayjs/locale/ru";

const CalendarPicker = ({ date, setDate }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpened(true)}>
        {date.toLocaleDateString("ru-RU", { month: "long", year: "numeric" })}
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Выберите дату"
      >
        <DatePicker
          value={date}
          locale="ru"
          labelFormat="MMMM, YYYY"
          size="xl"
          onChange={(date) => {
            setDate(date);
            setOpened(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default CalendarPicker;
