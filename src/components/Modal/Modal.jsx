import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { modals } from "../../utils/data";

const Modal = ({ modal, setModal }) => {
  const { pathname } = useLocation();
  const ModalData = modals.filter((f) => f.path === pathname);
  useEffect(()=>{
    if(ModalData.length === 0){
       setModal(false)
    }
  },[ModalData,setModal])
  return (
    <div
      className={`Modal-container ${
        modal ? ((ModalData.length === 0) ? ""  : "active") : ""
      }`}
    >
      {ModalData.map((item, index) => (
        <item.component modal={modal} setModal={setModal} key={index} />
      ))}
    </div>
  );
};

export default Modal;
