import React, { useEffect } from "react";
import { CheckboxIndicator, CheckIcon, CloseIcon, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { BiCalendar, BiCopy } from "react-icons/bi";
import { ArrowDown, ArrowDown2 } from "../../assets/svgs";
import { toast } from "react-toastify";
import { useCreateModal } from "../../redux/useSelector";
import { useDispatch } from "react-redux";
import { setModalCalendar } from "../../redux/modalCalendarSlice";
import { useForm } from "react-hook-form";
import moment from "moment";
import { postRequest, putRequest } from "../../service/api";

const Create = ({ getEvents, values, setEventObject, setUpdateEvent }) => {
  const dispatch = useDispatch();
  const visible = useCreateModal();
  const [collabrators, setCollabrators] = React.useState([]);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [collabratorsChecked, setCollabratorsChecked] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      meeting_name: "",
      date: moment(new Date()).format("YYYY-MM-DD"),
      start_time: "",
      end_time: "",
      place_meeting: "googleMeet",
      link: "",
    },
  });
  const onClose = () => {
    dispatch(setModalCalendar(false));
    if (values?.id) {
      setEventObject({});
      setUpdateEvent({});
      reset();
    }
  };

  useEffect(() => {
    Object.keys(values).forEach((key) => {
      if (key === "participants") return;
      setValue(key, values[key]);
    });
    setCollabratorsChecked((collabratorsChecked) =>
      collabratorsChecked?.map((item) => {
        if (values.participants?.includes(item.id)) {
          return { ...item, checked: true };
        }
        return item;
      })
    );
  }, [values, setValue]);

  const addCollabrator = (collabrator) => {
    setCollabratorsChecked(
      collabratorsChecked?.map((item) => {
        if (item?.id === collabrator?.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  const isSelected = (collabrator) =>
    collabratorsChecked?.find((item) => item.id === collabrator.id);

  React.useEffect(() => {
    const collabrators = [
      {
        id: 1,
        name: "Emily Taylor",
      },
      {
        id: 2,
        name: "Jennifer Scott",
      },
      {
        id: 3,
        name: "Jennifer Scott",
      },
    ];
    setCollabrators(collabrators);
    setCollabratorsChecked(collabrators);
  }, []);

  const onSubmit = (values) => {
    values.participants = collabratorsChecked
      .filter((collabrator) => collabrator.checked)
      .map(({ id }) => id);

    values.time = `${values.start_time} - ${values.end_time}`;
    delete values.start_time;
    delete values.end_time;

    if (values?.id) {
      return putRequest(
        `meetings/${values.id}`,
        values,
        localStorage.getItem("token")
      )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Встреча обновлена успешно", {
              position: "bottom-center",
              autoClose: 2000,
            });
            getEvents();
            onClose();
            setEventObject({});
          }
        })
        .catch((err) => {
          toast.error("Ошибка при обновлении встречи", {
            position: "bottom-center",
            autoClose: 2000,
          });
        });
    }

    postRequest("meetings", values, localStorage.getItem("token"))
      .then((res) => {
        if (res.status === 200) {
          toast.success("Встреча создана успешно", {
            position: "bottom-center",
            autoClose: 2000,
          });
          getEvents();
          onClose();
        }
      })
      .catch((err) => {
        toast.error("Ошибка при создании встречи", {
          position: "bottom-center",
          autoClose: 2000,
        });
      });
  };

  return (
    <div
      className={`create-meeting-modal ${
        visible ? "create-meeting-modal-active" : ""
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="create-meeting-modal-body"
      >
        <div className="create-meeting-modal-header">
          <h2>{values?.id ? `Редактировать` : "Добавить"} встречу</h2>
          <button onClick={onClose} type="button">
            <CloseIcon size="16" />
          </button>
        </div>
        <div className="creating-meeting-modal-body">
          <label className="input-row">
            <span>Название встречи</span>
            <input
              type="text"
              placeholder="Meeting Name"
              className={`input-form-item ${
                errors.meeting_name ? "error" : ""
              }`}
              {...register("meeting_name", { required: true })}
            />
          </label>
          <div className="form-row">
            <label className="input-row">
              <span>Дата</span>
              <DatePickerInput
                locale="ru"
                className={`date-picker-modal-btn ${
                  errors.date ? "error" : ""
                }`}
                rightSection={<BiCalendar size="16" />}
                defaultValue={new Date()}
                onChange={(date) =>
                  setValue("date", moment(date).format("YYYY-MM-DD"))
                }
              />
            </label>

            <div className="input-row">
              <span>Время</span>
              <div className="times-row">
                <input
                  type="time"
                  className={`input-form-item ${
                    errors.start_time ? "error" : ""
                  }`}
                  {...register("start_time", { required: true })}
                />
                <input
                  type="time"
                  className={`input-form-item ${
                    errors.end_time ? "error" : ""
                  }`}
                  {...register("end_time", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <label className="input-row">
              <span>Место встречи</span>
              <Select
                className={`date-picker-modal-btn ${
                  errors.place_meeting ? "error" : ""
                }`}
                allowDeselect={false}
                rightSection={
                  <ArrowDown2 color="rgb(0, 0, 0)" width="10" height="10" />
                }
                data={[
                  {
                    label: "Google Meet",
                    value: "googleMeet",
                  },
                  {
                    label: "Zoom",
                    value: "zoom",
                  },
                  {
                    label: "Telegram",
                    value: "telegram",
                  },
                ]}
                placeholder="Место встречи"
                defaultValue={"googleMeet"}
                onChange={(value) => setValue("place_meeting", value)}
              />
            </label>

            <div className="input-row">
              <span>Онлайн ссылка</span>
              <div className="times-row">
                <input
                  type="text"
                  placeholder="https://meet.google.com/xyz-abc-123"
                  className={`input-form-item ${errors.link ? "error" : ""}`}
                  {...register("link", { required: true })}
                />
                <BiCopy
                  className="copy-icon"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://meet.google.com/xyz-abc-123"
                    );
                    toast.info("Скопировано в буфер обмена", {
                      position: "bottom-center",
                      autoClose: 2000,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="input-row">
            <span>Добавить учасника</span>
            <div
              className={`collabrators ${
                openDetails ? "collabrator-open" : ""
              } ${
                !collabratorsChecked.filter(({ checked }) => checked)?.length
                  ? "error"
                  : ""
              }`}
              onClick={() => !openDetails && setOpenDetails(!openDetails)}
            >
              <button
                type="button"
                className={"arrow-select-custome"}
                onClick={() => setOpenDetails(!openDetails)}
              >
                <ArrowDown />
              </button>
              {collabrators.map((collabrator) => (
                <div
                  className="collabrator-item"
                  key={collabrator.id}
                  onClick={() => addCollabrator(collabrator)}
                >
                  <CheckboxIndicator
                    checked={
                      isSelected(collabrator)
                        ? isSelected(collabrator).checked
                        : false
                    }
                    size="16"
                    color="rgb(83, 92, 232)"
                    iconColor="rgb(255, 255, 255)"
                  />
                  <span className="collabrator-name">{collabrator.name}</span>
                </div>
              ))}
            </div>
          </div>
          <label className="input-row">
            <span>Приглашенные</span>
            <div className="row-collabrators">
              {collabratorsChecked?.map((collabrator) => {
                if (collabrator.checked) {
                  return (
                    <div
                      className="collabrator-item"
                      key={collabrator.id}
                      onClick={() => addCollabrator(collabrator)}
                    >
                      <img
                        className="collabrator-avatar"
                        src={`https://i.pravatar.cc/100${collabrator.id}?img=6${collabrator.id}`}
                        alt=""
                      />
                      <span className="collabrator-name">
                        {collabrator.name}
                      </span>
                      <div className="collabrator-close-btn">
                        <CloseIcon size="13" />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </label>
        </div>
        <div className="create-meeting-modal-footer">
          <button type="button" className="send-notify-meeting-btn"
            onClick={() => {
              toast.info("Уведомления отправлены", {
                position: "bottom-center",
                autoClose: 2000,
              });
            }}
          >
            Отправить уведомления
          </button>
          <button
            className="create-meeting-btn"
            disabled={
              !collabratorsChecked.filter(({ checked }) => checked)?.length
            }
          >
            <span>Сохранить</span>
            <CheckIcon size={11} color="#fff" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
