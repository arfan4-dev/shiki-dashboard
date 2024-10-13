"use client";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "@/redux/features/modal/modal.slice";
import { RootState } from "@/redux/store";

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
function GlobalModal() {
  const modal = useSelector((state: RootState) => state.modal);
  const { isOpen, componentName: ComponentToRender, componentProps } = modal;

  if (!isOpen || !ComponentToRender) return null;

  const afterOpenModal = () => {
    // Disable background scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="relative z-50 ">
      <Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onAfterOpen={afterOpenModal}
        // onRequestClose={closeEmployeeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        <ComponentToRender {...componentProps} />
      </Modal>
    </div>
  );
}
export default GlobalModal;
