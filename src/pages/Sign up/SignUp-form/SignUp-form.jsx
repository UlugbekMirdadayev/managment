import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/userSlice";
import { post } from "../../../service/api";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
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
      setLoader(true);
      post("auth/login", data)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          dispatch(setUser(data));
          navigate("/");
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
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
      <button type="submit" disabled={loader}>
        {" "}
        <div className={`loader-user ${loader ? "active-loader" : ""}`}>
          <div className="loader"></div>
        </div>{" "}
        Войти
      </button>
    </form>
  );
};

export default SignUpForm;
