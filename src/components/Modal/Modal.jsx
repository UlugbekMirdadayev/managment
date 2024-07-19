import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { modals } from "../../utils/data";
import { useModal } from "../../redux/useSelector";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/modalSlice";

const Modal = () => {
  const { pathname } = useLocation();
  const ModalData = modals.filter((f) => f.path === pathname);
  const modal = useModal()
  const dispatch = useDispatch()
  useEffect(()=>{
    if(ModalData.length === 0){
       dispatch(setModal(false))
    }
  },[ModalData.length,dispatch])
  return (
    <div
      className={`Modal-container ${
        modal ? ((ModalData.length === 0) ? ""  : "active") : ""
      }`}
    >
      {ModalData.map((item, index) => (
        <item.component key={index} />
      ))}
    </div>
  );
};

export default Modal;
