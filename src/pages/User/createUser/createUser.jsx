import React, { useEffect, useState } from "react";
import * as icon from "../../../assets/svgs/index";
import "./createUser.css";
import { postRequest } from "../../../service/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/loaderSlice";
import { useUpdate } from "../../../redux/useSelector";
import { clearUpdate } from "../../../redux/updateSlice";

const AddUser = () => {
  const [arrow, setArrow] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [surname, setSurName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [roles, setRoles] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const HandleCreateUser = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      lastname === "" ||
      surname === "" ||
      telegram === "" ||
      roles === "" ||
      login === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      let data = new FormData();
      data.append("name", lastname + " " + name + " " + surname);
      data.append("email", login);
      data.append("telegram", telegram);
      data.append("password", password);
      data.append("role", roles);
    dispatch(setLoader(true))
      postRequest("users", data, token)
        .then(({ data }) => {
          console.log(data);
          toast.success("User yaratildi");
          setName("");
          setLastName("");
          setSurName("");
          setTelegram("");
          setRoles("");
          setLogin("");
          setPassword("");
          navigate("/users");
          toast.success("User yaratildi")
      dispatch(setLoader(false))
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message ? err.message : "Xatolik yuz berdi");
      dispatch(setLoader(false))
        });
      setError(false);
    }
  };
  let updateUser = useUpdate()
  useEffect(() => {
    if (updateUser) {
      setName(updateUser?.name?.split(" ")[1]);
      setLastName(updateUser?.name?.split(" ")[0]);
      setSurName(updateUser?.name?.split(" ")[2]);
      setTelegram(updateUser?.telegram);
      setRoles(updateUser?.role);
      setLogin(updateUser?.email);
    }
  }, [updateUser]);
  const handleUpdate = () => {
    if (
      name === "" ||
      lastname === "" ||
      surname === "" ||
      telegram === "" ||
      roles === "" ||
      login === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      let data = new FormData();
      data.append("name", lastname + " " + name + " " + surname);
      data.append("email", login);
      data.append("telegram", telegram);
      data.append("password", password);
      data.append("role", roles);
      dispatch(setLoader(true))
      postRequest("userUpdate/" + updateUser.id, data, token)
        .then(({ data }) => {
          console.log(data);
          toast.success("User o`zgar tirildi");
          dispatch(clearUpdate())
          setName("");
          setLastName("");
          setSurName("");
          setTelegram("");
          setRoles("");
          setLogin("");
          setPassword("");
          navigate("/users");
         dispatch(setLoader(false))
        })
        .catch((err) => {
          console.log(err);
      dispatch(setLoader(false))
        });
      setError(false);
    }
  };
  return (
    <div className="createUser">
      <h1>Пользователи</h1>
      <form onSubmit={(e) => HandleCreateUser(e)}>
        <h1>Добавить пользователя</h1>
        <div className="form-input-container">
          <label
            htmlFor="name"
            className={error ? (name === "" ? "error" : "") : ""}
          >
            Имя
          </label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={error ? (name === "" ? "error" : "") : ""}
          />
        </div>
        <div className="form-input-container">
          <label
            htmlFor="lastName"
            className={error ? (lastname === "" ? "error" : "") : ""}
          >
            Фамилия
          </label>
          <br />
          <input
            type="text"
            id="lastName"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className={error ? (lastname === "" ? "error" : "") : ""}
          />
        </div>
        <div className="form-input-container">
          <label
            htmlFor="Отчество"
            className={error ? (surname === "" ? "error" : "") : ""}
          >
            Отчество
          </label>
          <br />
          <input
            type="text"
            id="Отчество"
            value={surname}
            onChange={(e) => setSurName(e.target.value)}
            className={error ? (surname === "" ? "error" : "") : ""}
          />
        </div>
        <div className="form-input-container">
          <label
            htmlFor="telegram"
            className={error ? (telegram === "" ? "error" : "") : ""}
          >
            Телеграм
          </label>
          <br />
          <input
            type="text"
            id="telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            className={error ? (telegram === "" ? "error" : "") : ""}
          />
        </div>
        <div className="form-input-container">
          <label className={error ? (roles === "" ? "error" : "") : ""}>
            Роль
          </label>
          <br />
          <div className={`input-drop ${arrow ? "input-drop-active" : ""}`}>
            <div
              className="input"
              onClick={() => {
                setArrow(!arrow);
              }}
            >
             {roles === undefined ? "manager":roles}
              <button
                className="arrow"
                type="button"
                onClick={() => {
                  setArrow(!arrow);
                  setArrow(!arrow);
                }}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {arrow ? (
                  <icon.ArrowUp color={"#565E6C"} />
                ) : (
                  <icon.ArrowDown color={"#565E6C"} />
                )}
              </button>
            </div>

            <div
              className={`input ${arrow ? "drop-input-active" : ""}`}
              onClick={() => {
                setRoles("support");
                setArrow(!arrow);
              }}
            >
              Support
            </div>
            <div
              className={`input ${arrow ? "drop-input-active" : ""}`}
              onClick={() => {
                setRoles("general_director");
                setArrow(!arrow);
              }}
            >
              Генеральный директор
            </div>
            <div
              className={`input ${arrow ? "drop-input-active" : ""}`}
              onClick={() => {
                setRoles("owner");
                setArrow(!arrow);
              }}
            >
              Owner
            </div>
          </div>
        </div>
        <div className="form-input-container">
          <label
            htmlFor="login"
            className={error ? (login === "" ? "error" : "") : ""}
          >
            Логин
          </label>
          <br />
          <input
            type='email'
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className={error ? (login === "" ? "error" : "") : ""}
          />
        </div>
        <div className="form-input-container">
          <label
            htmlFor="password"
            className={error ? (password === "" ? "error" : "") : ""}
          >
            Пароль
          </label>
          <br />
          <input
            type="text"
            id="password"
            value={password}
            className={error ? (password === "" ? "error" : "") : ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div></div>
          <div className="form-actions">
            {updateUser ? (
              <button onClick={handleUpdate}>update</button>
            ) : (
              <button type="sumbit">Сохранить</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
