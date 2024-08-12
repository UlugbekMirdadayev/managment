import React, { useCallback, useEffect, useState } from "react";
import * as icon from "../../../assets/svgs/index";
import { useUser } from "../../../redux/useSelector";
import "./ReportForm.css";
import { status_users } from "../../../utils/data";
import { postRequest } from "../../../service/api";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/modalSlice";
import { setLoader } from "../../../redux/loaderSlice";

const ReportForm = () => {
  const [type, setType] = useState("Ежедневный");
  const [report, setReport] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null || "");
  const [status, setStatus] = useState("Принято");
  const [comments, setComments] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useUser();
  const getReports = useCallback(() => {
    dispatch(setLoader(true));
    getReports("reports", token)
      .then((reponsive) => {
        dispatch(setReport(reponsive.data.data));
        dispatch(setLoader(false));
        console.log(reponsive.data.data);
      })
      .catch((error) => {
        console.error("Xato", error);
        dispatch(setLoader(false));
      });
  }, [token, dispatch]);
  const handleReport = () => {
    if (status_users.filter((f) => f === user?.user?.roles[0]?.name)[0]) {
      if (
        type === "" ||
        report === "" ||
        description === "" ||
        date === "" ||
        file === null ||
        status === "" ||
        comments === ""
      ) {
        setError(true);
      } else {
        let data = new FormData();
        data.append("type", type);
        data.append("report_name", report);
        data.append("description", description);
        data.append("date", date);
        data.append("status", status);
        data.append("comment", comments);
        data.append("file", file);
        postRequest("reports", data, token)
          .then((data) => {
            console.log(data);
            setType("");
            setReport("");
            setDescription("");
            setDate("");
            setStatus("");
            setComments("");
            setFile(null);
            dispatch(setModal(false));
            getReports();
          })
          .catch((err) => {
            console.log(err);
          });
        setError(false);
      }
    } else {
      if (
        type === "" ||
        report === "" ||
        description === "" ||
        date === "" ||
        file === null ||
        comments === ""
      ) {
        setError(true);
      } else {
        let data = new FormData();
        data.append("type", type);
        data.append("report_name", report);
        data.append("description", description);
        data.append("date", date);
        data.append("comment", comments);
        data.append("file", file);
        postRequest("reports", data, token)
          .then((data) => {
            console.log(data);
            setType("");
            setReport("");
            setDescription("");
            setDate("");
            setComments("");
            setFile(null);
          })
          .catch((err) => {
            console.log(err);
          });
        setError(false);
      }
    }
  };
  useEffect(() => {
    if (user.user.name.includes("Support")) {
      console.log("none");
    } else {
      console.log("block");
    }
  }, [user]);
  return (
    <div className="ReportForm-container">
      <div className="ReportForm-head">
        <h1>Создать Отчеты</h1>
        <button onClick={() => dispatch(setModal(false))}>
          <icon.Close />
        </button>
      </div>
      <div className="ReportForm-body">
        <form className="ReportForm-body-form">
          <div className="input-name">
            <label
              htmlFor="name"
              className={error ? (type === "" ? "error" : "") : ""}
            >
              Тип
            </label>
            <br />
            <select
              name="name"
              id="name"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={error ? (type === "" ? "error-input" : "") : ""}
            >
              <option value="Ежедневный">Ежедневный</option>
              <option value="Ежемесечно">Ежемесечно</option>
            </select>
          </div>
          <div className="input-name">
            <label
              htmlFor="name"
              className={error ? (report === "" ? "error" : "") : ""}
            >
              Название отчета
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="id"
              placeholder="Электронная почта с напоминанием о событии"
              value={report}
              onChange={(e) => setReport(e.target.value)}
              className={error ? (report === "" ? "error-input" : "") : ""}
            />
          </div>
          <div className="description">
            <label
              className={`form-title ${
                error ? (description === "" ? "error" : "") : ""
              }`}
            >
              Описание
            </label>{" "}
            <br />
            <textarea
              name="name"
              id="id"
              placeholder="Введите описание"
              className={`form-description ${
                error ? (description === "" ? "error-input" : "") : ""
              }`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="date">
            <label
              className={`form-title ${
                error ? (date === "" ? "error" : "") : ""
              }`}
            >
              Дата
            </label>
            <br />
            <input
              type="date"
              name="name"
              id="id"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={error ? (date === "" ? "error-input" : "") : ""}
            />
          </div>

          <div className="form-document">
            <label
              className={`form-title ${
                error ? (file === null ? "error" : "") : ""
              }`}
            >
              Документы
            </label>{" "}
            <br />
            <input
              type="file"
              name="name"
              id="id"
              value={file}
              onChange={(e) => setFile(e.target.value)}
              className={error ? (file === null ? "error-input" : "") : ""}
            />
          </div>
          <div
            className="input-name"
            style={{
              display: user.user.name.includes("Support") ? "none" : "block",
            }}
          >
            <label
              htmlFor="name"
              className={error ? (status === "" ? "error" : "") : ""}
            >
              Статус
            </label>
            <br />
            <select
              name="name"
              id="name"
              style={{ cursor: "pointer" }}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={error ? (status === "" ? "error-input" : "") : ""}
            >
              <option value="Принято">Принято</option>
              <option value="не Принято">не Принято</option>
            </select>
          </div>
          <div className="form-footer" style={{ display: "block" }}>
            <label
              htmlFor="id"
              className={error ? (comments === "" ? "error" : "") : ""}
            >
              Комментарий
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="id"
              placeholder="Lorem"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className={error ? (comments === "" ? "error-input" : "") : ""}
            />
          </div>
          <div className="comments">lorem</div>
        </form>
      </div>
      <div className="ReportForm-footer">
        <div></div>
        <button onClick={() => handleReport()}>
          Сохранить <icon.ArrowRight2 />
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
