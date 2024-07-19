import React, {   useEffect, useState } from "react";
import "./User.css";
import { deleteRequest, getRequest } from "../../service/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as icon from "../../assets/svgs/index";

const User = () => {
  const [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const getUsers = () => {
    getRequest("users", token)
      .then(({ data }) => {
        setUsers(data.data.map((i)=>
        {
          return {...i,arrow:false}
        }));
        toast.success("Ma`lumotlar keldi");
      })
      .catch((err) => {
        console.error("Xaot:", err.message);
        toast.error(err.message ? err.message : "Xatolik yuz berdi");
      });
  };
  useEffect(()=>{
  getUsers()
},[])
  const Update = (item) => {
    localStorage.setItem("updateUser", JSON.stringify(item));
    navigate("/createUser");
  };
  const Delete = (id) => {
    deleteRequest("users/" + id, token)
      .then(({ data }) => {
        console.log(data);
        toast.success("User o`chirildi");
      })
      .catch((Err) => {
        console.log("error", Err);
        toast.error(Err.message ? Err.message : "Xatolik yuz berdi");
      });
  };
  const hanldeArrow = (item) => {
    const excite = users.filter((f) => f === item)[0];
    if (excite) {
      setUsers(
        users.map((x) => {
          return x.id === excite.id
            ? { ...excite, arrow: !excite.arrow }
            : x;
        })
      );
    }
  };
  return (
    <>
      <div className={`User-container `}>
        <h1>Все пользователи</h1>
        <button onClick={() => getUsers()} className="refresh-btn">refresh</button>
        <table className="table-desktop">
          <thead>
            <tr>
              <th className="id">Id</th>
              <th>ФИО</th>
              <th>Login</th>
              <th>E-mail</th>
              <th>Должность</th>
              <th>Дейтвие</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.telegram}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="update" onClick={() => Update(item)}>
                      Редактировать
                    </button>
                    <button className="delete" onClick={() => Delete(item.id)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="table-mobile">
          <tbody>
            {users.map((item) => {
              return (
                <tr className={`tr ${item.arrow ? "active-arrow-table":"tr"} `} key={item.id}>
                  <tr>
                    <th>ID</th>
                    <td>{item.id} 

                    <button
                      className="td-btn"
                      onClick={() => hanldeArrow(item)}
                    >
                      {item.arrow ? <icon.ArrowUp2 /> : <icon.ArrowDown2 />}
                    </button>
                    </td>
                  </tr>
                  <tr className={item.arrow ? "tr-active":"tr-td"}>
                    <th>Имя</th>
                    <td>{item.name}</td>
                  </tr>
                  <tr className={item.arrow ? "tr-active":"tr-td"}>
                    <th>Телеграм</th>
                    <td>{item.telegram}</td>
                  </tr>
                  <tr className={item.arrow ? "tr-active":"tr-td"}>
                    <th>Email</th>
                    <td>{item.email}</td>
                  </tr>
                  <tr className={item.arrow ? "tr-active":"tr-td"}>
                    <th>Role</th>
                    <td>{item.role}</td>
                  </tr>
                  <tr className={item.arrow ? "tr-active":"tr-td"}>
                    <th>кнопка</th>
                    <td>
                      <button className="update" onClick={() => Update(item)}>
                        Редактировать
                      </button>
                      <button
                        className="delete"
                        onClick={() => Delete(item.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
