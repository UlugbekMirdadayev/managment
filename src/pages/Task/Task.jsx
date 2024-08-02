import React, { useCallback, useEffect, useState } from "react";
import * as icon from "../../assets/svgs/index";
import "./Task.css";
import { getRequest } from "../../service/api";
import { toast } from "react-toastify";
import { useTask } from "../../redux/useSelector";
import { useDispatch } from "react-redux";
import { setTask } from "../../redux/taskSlice";
import { setLoader } from "../../redux/loaderSlice";
import { updateTask } from "../../redux/updateSlice";
import { setModal } from "../../redux/modalSlice";

const Task = () => {
  const task = useTask();
  const [Array, setArray] = useState([
    {
      title: "Все",
    },
    {
      title: "Делать",
      children: [],
    },
    {
      title: "в ходе выполнения",
      children: [],
    },
    {
      title: "Не выполненно",
      children: [],
    },
    {
      title: "сделно",
      children: [],
    },
  ]);
  const [select, setSelect] = useState("Все");
  const FakeData = Array.filter((f) =>
    select === "Все" ? Array : f.title === select
  );
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const getTask = useCallback(() => {
    dispatch(setLoader(true));
    getRequest("tasks", token)
      .then(({ data }) => {
        toast.success("Задачи пришол");
        dispatch(setTask(data.data));
        dispatch(setLoader(false));
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message ? err.message : "Xatlik yuz berdi");
        dispatch(setLoader(false));
      });
  }, [token, dispatch]);
  useEffect(() => {
    if (task?.length === 0) {
      getTask();
    }
  }, [getTask, task]);
  useEffect(() => {
    setArray((Array) =>
      Array.map((x) => {
        return { ...x, children: task?.filter((f) => f.status === x.title) };
      })
    );
  }, [task, setArray]);
  useEffect(() => {
    if (localStorage.getItem("select")) {
      setSelect(localStorage.getItem("select"));
    } else {
      setSelect(select);
    }
  }, [select, setSelect]);
  const Select = (e) => {
    setSelect(e.target.value);
    localStorage.setItem("select", e.target.value);
  };
  const Update = (item) => {
    dispatch(updateTask(item));
    dispatch(setModal(true));
  };
  return (
    <div className="task-container">
      <nav>
        <select name="name" id="id" onChange={Select}>
          <option value={select}>{select}</option>
          {Array.map((i, index) => (
            <option
              value={i?.title}
              key={index}
              style={{ display: select === i.title ? "none" : "block" }}
            >
              {i?.title}
            </option>
          ))}
        </select>
      </nav>
      <div className="tasks-wrapper">
        {FakeData.map((item) => {
          return (
            <div
              className={`task-column ${item?.title}`}
              key={item?.title}
              style={{ display: item.title === "Все" ? "none" : "" }}
            >
              <h1 className="task-column-title">
                <span>{item?.children?.length}</span> {item?.title}
              </h1>
              {item?.children?.map((i, index) => {
                return (
                  <div
                    className={`task-card ${
                      i.level === "Высокий"
                        ? "task-card-red "
                        : "task-card-yellow"
                    }`}
                    key={index}
                  >
                    <hr className="card-hr" />
                    <div className="card-right">
                      <div className="card-right-head">
                        <h2>{i.task_name}</h2>
                        <p>{i.level}</p>
                      </div>
                      <div className="card-right-body">
                        <p>
                          <icon.Clock />
                          {i.end_date}
                        </p>
                        <button onClick={() => Update(i)}>
                          <icon.Pen />
                        </button>
                      </div>
                      <hr />
                      <div className="card-right-footer">
                        <p style={{ display: i?.created_by ? "flex" : "none" }}>
                          <span>Назначил</span> {i.created_by}
                        </p>
                        <p
                          style={{
                            display: i?.responsible_person ? "flex" : "none",
                          }}
                        >
                          <span>Ответственное лицо</span>
                          {i.responsible_person}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
