import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/userSlice";
import { post } from "../../../service/api";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setError(true);
    } else {
      let data = new FormData();
      data.append("email", name);
      data.append("password", password);

      // let config = {
      //   method: "post",
      //   maxBodyLength: Infinity,
      //   url: "https://calendar-api.fasdfasdfs.top/api/",
      //   data: data,
      // };

      post("auth/login", data)
        .then(({ data }) => {
          toast.success("Login bo`ldi");
          localStorage.setItem("token", data.token);
          dispatch(setUser(data));
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message ? error.message : "Xatolik yuz berdi");
        });
      setError(false);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <h1>Добропожаловать</h1>
      <div className="input-container">
        <label
          htmlFor="name"
          className={error ? (name === "" ? "error" : "") : ""}
        >
          Логин
        </label>
        <br />
        <input
          type="email"
          placeholder="Enter email"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={error ? (name === "" ? "error" : "") : ""}
        />
      </div>
      <div className="input-container">
        <label
          htmlFor="password"
          className={error ? (password === "" ? "error" : "") : ""}
        >
          Пароль
        </label>
        <br />
        <input
          type="password"
          placeholder="*********"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={error ? (password === "" ? "error" : "") : ""}
        />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default SignUpForm;
