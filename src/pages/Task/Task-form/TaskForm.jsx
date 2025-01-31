import React, { useCallback, useEffect, useState } from "react";
import * as icon from "../../../assets/svgs/index";
import "./TaskForm.css";
import { getRequest, postRequest } from "../../../service/api";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/loaderSlice";
import { setModal } from "../../../redux/modalSlice";
import { created_by } from "../../../utils/data";
import { useUpdate } from "../../../redux/useSelector";
import { setTask } from "../../../redux/taskSlice";
import { clearUpdate } from "../../../redux/updateSlice";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Высокий");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [file, setFile] = useState(null);
  const [forward, setForward] = useState(created_by[0]);
  const [describe, setDiscribe] = useState("");
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const getTask = useCallback(() => {
    dispatch(setLoader(true));
    getRequest("tasks", token)
      .then(({ data }) => {
        dispatch(setTask(data.data));
        dispatch(setLoader(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoader(false));
      });
  }, [token, dispatch]);
  const handleCreate = () => {
    if (
      name === "" ||
      level === "" ||
      status === "" ||
      startDate === "" ||
      finishDate === "" ||
      file === null ||
      forward === "" ||
      describe === "" ||
      new Date(finishDate) < new Date(startDate)
    ) {
      setError(true);
      if (new Date(finishDate) < new Date(startDate)) {
        alert("Дата окончания не может быть меньше даты начала");
      }
    } else {
      let body = new FormData();
      body.append("task_name", name);
      body.append("level", level);
      body.append("status", status);
      body.append("start_date", startDate);
      body.append("end_date", finishDate);
      body.append("description", describe);
      body.append("file", file);
      body.append("responsible_person", forward);
      dispatch(setLoader(true));
      postRequest("tasks", body, token)
        .then(({ data }) => {
          dispatch(clearUpdate());
          console.log(data);
          dispatch(setLoader(false));
          setName("");
          setLevel("Высокий");
          setStatus("");
          setStartDate("");
          setFinishDate("");
          setDiscribe("");
          setFile(null);
          setForward("");
          dispatch(setModal(false));
          getTask();
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLoader(false));
        });
      setError(false);
    }
  };
  const update_task = useUpdate();
  useEffect(() => {
    if (update_task?.id) {
      setName(update_task.task_name);
      setLevel(update_task.level);
      setStatus(update_task.status);
      setStartDate(update_task.start_date);
      setFinishDate(update_task.end_date);
      setDiscribe(update_task.description);
      setFile(update_task.file);
      setForward(update_task.created_by);
    }
  }, [update_task]);
  const handleUpdate = () => {
    if (
      name === "" ||
      level === "" ||
      status === "" ||
      startDate === "" ||
      finishDate === "" ||
      file === null ||
      forward === "" ||
      describe === ""
    ) {
      setError(true);
    } else {
      const body = new FormData();
      body.append("task_name", name);
      body.append("level", level);
      body.append("status", status);
      body.append("start_date", startDate);
      body.append("end_date", finishDate);
      body.append("description", describe);
      body.append("file", file);
      body.append("responsible_person", forward);
      dispatch(setLoader(true));
      postRequest("taskUpdate/" + update_task?.id, body, token)
        .then(({ data }) => {
          dispatch(clearUpdate());
          console.log(data);
          dispatch(setLoader(false));
          setName("");
          setLevel("");
          setStartDate("");
          setFinishDate("");
          setDiscribe("");
          dispatch(setModal(false));
          getTask();
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLoader(false));
        });
      setError(false);
    }
  };

  return (
    <div className="TaskForm-container">
      <div className="TaskForm-head">
        <h1>Создать задачу</h1>
        <button onClick={() => dispatch(setModal(false))}>
          <icon.Close />
        </button>
      </div>
      <div className="TaskForm-body">
        <h1 className="body-title">
          <icon.CInfo />
          Общая информация
        </h1>
        <form
          className="TaskForm-body-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-name">
            <label
              htmlFor="name"
              className={error ? (name === "" ? "error" : "") : ""}
            >
              Название события
            </label>
            <br />
            <input
              type="text"
              placeholder="Название события"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={error ? (name === "" ? "error" : "") : ""}
            />
          </div>
          <div className="input-wrapper">
            <div className="input-container">
              <label
                htmlFor="срочности"
                className={error ? (level === "" ? "error" : "") : ""}
              >
                Уровень срочности
              </label>
              <br />
              <select
                name="срочности"
                id="срочности"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className={error ? (level === "" ? "error" : "") : ""}
              >
                <option
                  value="Высокий"
                  style={{ display: level === "Высокий" ? "none" : "block" }}
                >
                  Высокий
                </option>
                <option
                  value="Средний"
                  style={{ display: level === "Средний" ? "none" : "block" }}
                >
                  Средний
                </option>
                <option
                  value="Низкий"
                  style={{ display: level === "Низкий" ? "none" : "block" }}
                >
                  Низкий
                </option>
              </select>
            </div>
            <div className="input-container">
              <label
                htmlFor="Статус"
                className={error ? (status === "" ? "error" : "") : ""}
              >
                Статус
              </label>
              <br />
              <select
                name="Статус"
                id="Статус"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={error ? (status === "" ? "error" : "") : ""}
              >
                <option value="Делать">Делать</option>
                <option value="в ходе выполнения">в ходе выполнения</option>
                <option value="Не выполненно">Не выполненно</option>
                <option value="сделно">сделно</option>
              </select>
            </div>
            <div className="input-container">
              <label
                htmlFor="начала"
                className={error ? (startDate === "" ? "error" : "") : ""}
              >
                Дата начала
              </label>
              <br />
              <input
                type="date"
                name="name"
                id="начала"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={error ? (startDate === "" ? "error" : "") : ""}
              />
            </div>
            <div className="input-container">
              <label
                htmlFor="окончания"
                className={error ? (finishDate === "" ? "error" : "") : ""}
              >
                Дата окончания
              </label>
              <br />
              <input
                type="date"
                name="name"
                id="окончания"
                value={finishDate}
                onChange={(e) => setFinishDate(e.target.value)}
                className={error ? (finishDate === "" ? "error" : "") : ""}
              />
            </div>
          </div>
          <label
            className={`form-title ${
              error ? (describe === "" ? "error" : "") : ""
            }`}
          >
            Описание
          </label>
          <textarea
            name="name"
            id="id"
            value={describe}
            onChange={(e) => setDiscribe(e.target.value)}
            placeholder="Описание"
            className={`form-description ${
              error ? (describe === "" ? "error" : "") : ""
            }`}
          ></textarea>
          <label
            className={
              error ? (file === null ? "error" : "form-title") : "form-title"
            }
          >
            Документы
          </label>
          <div className="form-document">
            <input
              type="file"
              name="name"
              id="id"
              onChange={(e) => {
                setFile(e?.target?.files[0]);
              }}
              className={error ? (file === null ? "error" : "") : ""}
            />
          </div>
          <div className="form-footer" style={{ display: "block" }}>
            <label
              htmlFor="id"
              className={error ? (forward === "" ? "error" : "") : ""}
            >
              Ответственное лицо
            </label>
            <br />
            <select
              name="name"
              id="id"
              value={forward}
              onChange={(e) => setForward(e.target.value)}
              className={error ? (forward === "" ? "error" : "") : ""}
            >
              {created_by.map((x) => {
                return (
                  <option value={x} key={x}>
                    {x}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <div className="TaskForm-footer">
        <div></div>
        {update_task?.task_name ? (
          <button onClick={handleUpdate}>
            Update <icon.ArrowRight2 />
          </button>
        ) : (
          <button onClick={handleCreate}>
            Сохранить <icon.ArrowRight2 />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskForm;
