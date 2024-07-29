import React from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { deletePlus, extraListHead, listHaed } from "../../utils/data";
import { Plus } from "../../assets/svgs";
import User from "../../assets/images/Avatar.png";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/modalSlice";

const Navbar = ({setsideBar, bar, setBar }) => {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch()

  return (
    <header className="nav-conatiner">
      <nav>
        <div className="nav-left">
          <h1>
            <div
              className={`bars ${bar ? "bar-active" : ""}`}
              onClick={() => {
                setBar(true);
                setsideBar(true);
              }}
            >
              <div className="bar line1"></div>
              <div className="bar line2"></div>
              <div className="bar line3"></div>
            </div>
            {listHaed.filter((f) => (f.path === pathname ? f : null))[0]?.title
              ? listHaed.filter((f) => (f.path === pathname ? f : null))[0]
                  ?.title
              : extraListHead.filter((f) => (f.path === pathname ? f : null))[0]
                  ?.title}
          </h1>
          <button
            className={`btn ${
              deletePlus.filter((f) => f === pathname)[0] === pathname
                ? "delete-btn"
                : "btn"
            }`}
            onClick={() => dispatch(setModal(true))}
            style={{
              display:
                deletePlus.filter((f) => f === pathname)[0] === pathname
                  ? "none"
                  : "flex",
            }}
          >
            <Plus />
            Создать
          </button>
        </div>
        <div className="nav-right">
          <button
             onClick={() => dispatch(setModal(true))}
            style={{
              display:
                deletePlus.filter((f) => f === pathname)[0] === pathname
                  ? "none"
                  : "flex",
            ":hover":{
            }}}
            className="btn"
            
          >
            <Plus />
            Создать
          </button>
          <div className="user">
            <h3>
              {user?.user?.name}
              <span>{user?.user?.roles[0]?.name}</span>
            </h3>
            <img src={user?.user?.image ? user?.user?.img : User} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
