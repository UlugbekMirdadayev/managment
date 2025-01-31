import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";
import { modals, routes } from "../utils/data";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useModal } from "../redux/useSelector";
import { setModal } from "../redux/modalSlice";

const SupportRoute = () => {
  const { pathname } = useLocation();
  const ModalData = modals.filter((f) => f.path === pathname);
  const [sideBar, setsideBar] = useState(false);
  const [bar, setBar] = useState(false);
  const dispatch = useDispatch()
  const modal = useModal()
  return (
    <div>
      <div
        className={`App ${
          modal && (ModalData.length === 0 ? "" : "activeApp")
        }`}
        onClick={() => {
          if (modal) {
            dispatch(setModal(false))
          }
        }}
      >
        <SideBar
          deleted={"Users"}
          sideBar={sideBar}
          setsideBar={setsideBar}
          setBar={setBar}
        />
        <div  style={{ flex: 1 }}>
          <Navbar modal={modal} setModal={setModal} setBar={setBar} bar={bar} setsideBar={setsideBar} />
          <Routes>
            {routes.map((item) => {
              return item.path !== "/users" ? (
                <Route
                  path={item.path}
                  key={item.path}
                  element={item.component}
                />
              ) : null;
            })}
          </Routes>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default SupportRoute;
