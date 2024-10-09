"use client";
import Modal from "react-modal";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openAddEmployeeModal,
  closeAddEmployeeModal,
} from "@/redux/modalSlice/employees";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.72)", // Background opacity
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    background: "transaprent",
  },
};
function GlobalModal({ isOpenModal, children }: any) {
  const dispatch = useDispatch();

  const closeEmployeeModal = () => {
    document.body.style.overflow = "auto";
    dispatch(closeAddEmployeeModal());
  };

  const afterOpenModal = () => {
    // Disable background scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    return () => {
      // Ensure that overflow is reset if the component unmounts while modal is open
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative z-50 ">
      <Modal
        isOpen={isOpenModal}
        contentLabel="Example Modal"
        onAfterOpen={afterOpenModal}
        onRequestClose={closeEmployeeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        {children}
      </Modal>
    </div>
  );
}
export default GlobalModal;
