import { ttCommonsRegular } from "@/utils/fonts";
import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
 closeDeleteEmployeeModal
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
const DeleteLeaveModal = () => {
  const dispatch = useDispatch();
  const deleteEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isDeleteEmployeeModalOpen
  );

  const closeDeleteModal = () => {
    document.body.style.overflow = "auto";
    dispatch(closeDeleteEmployeeModal());
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
    <Modal
      isOpen={deleteEmployeeModalIsOpen}
      contentLabel="Example Modal"
      onAfterOpen={afterOpenModal}
      onRequestClose={closeDeleteModal}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      <div className={`relative  ${ttCommonsRegular.className}`}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-[3.25rem] flex  flex-col justify-between text-center w-[502px]  h-[350px] ">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#282F5A] text-[28px]  font-semibold ">
                  Are You sure?
                </h2>
                <RxCross1
                  className="cursor-pointer"
                  size={20}
                  onClick={closeDeleteModal}
                />
              </div>
              <div className="text-[#6B7280] text-[20px] text-left leading-[33px] ">
                <p>Name: Dallas Keuchal</p>
                <p>Designation: Developer</p>
                <p>Phone no: xxx-xxx-xxx</p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                type="submit"
                className="h-[48px] w-[155px] text-[20px] shadow-md text-[#282F5A] rounded-[8px] "
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="h-[48px] w-[155px] text-[20px] shadow-md text-[#DF0D0D] rounded-[8px] h"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteLeaveModal;
