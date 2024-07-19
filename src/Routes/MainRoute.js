import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";
import { modals, routes } from "../utils/data";
import { Route, Routes, useLocation } from "react-router-dom";
import { useModal } from "../redux/useSelector";
import { useDispatch } from "react-redux";
import {setModal}  from "../redux/modalSlice"

const MainRoute = () => {
  const { pathname } = useLocation();
  const ModalData = modals.filter((f) => f.path === pathname);
  const [sideBar, setsideBar] = useState(false);
  const [bar, setBar] = useState(false);
  const dispatch = useDispatch()
  const modal = useModal()

  return (
    <>
      <div
        className={`App ${
          modal ? (ModalData.length === 0 ? "" : "activeApp") : ""
        }`}
        onClick={() => {
          if (modal) {
            dispatch(setModal(false));
          }
        }}
      >
        <SideBar
          sideBar={sideBar}
          setsideBar={setsideBar}
          bar={bar}
          setBar={setBar}
        />
        <div style={{ flex: 1 }}>
          <Navbar
            setsideBar={setsideBar}
            sideBar={sideBar}
            bar={bar}
            setBar={setBar}
          />
          <Routes>
            {routes.map((item) => {
              return (
                <Route
                  path={item.path}
                  key={item.path}
                  element={item.component}
                />
              );
            })}
          </Routes>
        </div>
      </div>
      <Modal/>
    </>
  );
};

export default MainRoute;
