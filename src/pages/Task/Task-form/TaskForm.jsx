import React, { useState } from "react";
import * as icon from "../../../assets/svgs/index";
import "./TaskForm.css";
import { toast } from "react-toastify";
import { postRequest } from "../../../service/api";

const TaskForm = ({ modal, setModal }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [file, setFile] = useState(null);
  const [forward, setForward] = useState("");
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token")
  const handleCreate = () => {
    if (
      name === "" ||
      level === "" ||
      status === "" ||
      startDate === "" ||
      finishDate === "" ||
      file === null ||
      forward === ""
    ) {
      setError(true);
    } else {
      postRequest("tasks",token).then(({data})=>{
        console.log(data);
        toast.success("Task yasaldi");
        setModal(false)
      }).catch((err)=>{
        console.log(err);
        toast.error(err.message ? err.message : "Xatolik yuz berdi")
      })
      setError(false);
    }
  };
  return (
    <div className="TaskForm-container">
      <div className="TaskForm-head">
        <h1>Создать задачу</h1>
        <button onClick={() => setModal(!modal)}>
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
                <option value="Высокий">Высокий</option>
                <option value="Средний">Средний</option>
                <option value="Низкий">Низкий</option>
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
                <option value="Сделанный">Сделанный</option>
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
          <label className="form-title">Описание</label>
          <div className="form-description">
            <p>
              «Один на один» — это инновационное и эксклюзивное сетевое
              мероприятие, призванное облегчить значимые связи и способствовать
              профессиональному росту в разнообразном сообществе отраслевых
              экспертов, профессионалов и энтузиастов.
            </p>
          </div>
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
              <option value="Emily Taylor">Emily Taylor</option>
              <option value="Emily Taylor">Emily Taylor</option>
            </select>
          </div>
        </form>
      </div>
      <div className="TaskForm-footer">
        <div></div>
        <button onClick={handleCreate}>
          Сохранить <icon.ArrowRight2 />
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
