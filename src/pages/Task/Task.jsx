import React, { useCallback, useEffect, useState } from "react";
import * as icon from "../../assets/svgs/index";
import "./Task.css";
import { getRequest } from "../../service/api";
import { toast } from "react-toastify";

const Task = () => {
  const [task,setTask] = useState([])
  const [Array,setArray] = useState([{
    title: "делать",
    children: [
    ],
  },
  {
    title: "в ходе выполнения",
    children: [
    ],
  },
  {
    title: "не выполненно",
    children: [
    ],
  },
  {
    title: "сделно",
    children:task,
  },])
  const [select, setSelect] = useState("Все");
  const FakeData = Array.filter((f) =>
    select === "Все" ? Array : f?.title === select
  );
  const token = localStorage.getItem("token")
  const getTask = useCallback(() => {
    getRequest("tasks",token)
    .then(({data})=>{
     toast.success("Tasklar keldi")
     setTask(data.data)
    }).catch((err)=>{
      console.log(err);
      toast.error(err.message ? err.message : "Xatlik yuz berdi")
    })
  },[token])
  useEffect(()=>{
    getTask()
  },[getTask])
  useEffect(()=>{
    setArray(Array.map((x)=>{
      if(x.children.length === 0){
        return {...x,children:task.filter((f)=>f.status === x.title)}
      }
    }))
  },[task])

  return (
    <div className="task-container">
      <nav>
        <select name="name" id="id" onChange={(e) => setSelect(e.target.value)}>
          <option value="Все">Все</option>
          {Array.map((i, index) => (
            <option value={i.title} key={index}>
              {i.title}
            </option>
          ))}
        </select>
      </nav>
      <div className="tasks-wrapper">
        {FakeData.map((item) => {
          return (
            <div className={`task-column ${item.title}`} key={item.title}>
              <h1 className="task-column-title">
                <span>{item.children.length}</span> {item.title}
              </h1>
              {item.children.map((i, index) => {
                return (
                  <div
                    className={`task-card ${
                      i.level === "высокий"
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
                        <button>
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
