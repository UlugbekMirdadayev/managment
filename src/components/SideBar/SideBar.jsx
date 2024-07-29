import React, { useState } from "react";
import "./SideBar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { listHaed } from "../../utils/data";
import * as icon from "../../assets/svgs/index";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/userSlice";
import User from "../../assets/images/Avatar.png";
import { hover } from "@syncfusion/ej2-react-schedule";

const SideBar = ({ deleted, sideBar, setsideBar, bar, setBar }) => {
  const [user, setUser] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LogOut = () => {
    localStorage.clear();
    dispatch(clearUser);
  };
  const userStorage = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className={`sidebar ${sideBar ? "active-sidebar" : ""}`}>
   
        <ul className="firstUl">
        <div className="sidebar-head">
          <div
            className={`bars ${bar ? "bar-active" : ""}`}
            onClick={() => {
              setBar(false);
              setsideBar(false);
            }}
          >
            <div className="bar  line1"></div>
            <div className="bar line2"></div>
            <div className="bar line3"></div>
          </div>
          <div className="sidebar-user">
            <h3>
              {userStorage?.user?.name} <br />
              <span>{userStorage?.user?.roles[0]?.name}</span>
            </h3>
            <img
              src={userStorage?.user?.image ? userStorage?.user?.img : User}
              alt=""
            />
          </div>
        </div>
          {listHaed.map((item, index) => {
            return (
              <li
                key={index}
                className={pathname === item.path ? "active" : "li"}
                onClick={() => {
                  navigate(item.path);
                  setsideBar(false);
                  setBar(false);
                }}
              >
                <item.icon
                  color={pathname === item.path ? "white" : "#565E6C"}
                  
                />
                {item.title}
              </li>
            );
          })}
          <li
            className="user-list"
            style={{ display: deleted === "Users" ? "none" : "block" }}
          >
            <p className="title" onClick={() => setUser(!user)}>
              <icon.User color={"#565E6C"} />
              Users
              {user ? <icon.ArrowUp /> : <icon.ArrowDown color={"#565E6C"} />}
            </p>
            <ul className={`${user ? "active" : ""}`}>
              <li
                className={pathname === "/createUser" ? "active" : "li"}
                onClick={() => {
                  navigate("/createUser");
                  setsideBar(false);
                  setBar(false);
                }}
              >
                Добавить
              </li>
              <li
                className={pathname === "/users" ? "active" : "li"}
                onClick={() => {
                  navigate("/users");
                  setsideBar(false);
                  setBar(false);
                }}
              >
                Все пользователи
              </li>
            </ul>
          </li>
        </ul>
        <ul >
          <li className="li">
            <icon.Icon1 /> <button>Бизнес аналитик</button>
          </li>
          <li className="li">
            <icon.Icon2 /> <button>Support</button>
          </li>
          <li className="li">
            <icon.Icon3 /> <button>Тех.хаб</button>
          </li>
          <li onClick={() => LogOut()} className="li logOutLi">
            <NavLink style={{ color: "#565E6C" }} to={"/"}>
              Выход
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
