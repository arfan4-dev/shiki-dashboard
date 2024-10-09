"use client";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa"; // Import the icons you need
import { TfiCalendar } from "react-icons/tfi";
import { FiHash } from "react-icons/fi";
import { TbBrandReason } from "react-icons/tb";
import { GrTableAdd } from "react-icons/gr";
import { FaFileArrowUp } from "react-icons/fa6";
import { GrStatusPlaceholder } from "react-icons/gr";
import { PiNoteDuotone } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

import { RxCross1 } from "react-icons/rx";
import { ttCommonsRegular, ttCommonsBold } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  openAddEmployeeModal,
  closeAddEmployeeModal,
} from "@/redux/modalSlice/employees";
import { PiBowlSteamThin } from "react-icons/pi";

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
    borderRadius: "8px",
  },
};
function NewHoliday() {
  let subtitle;
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    position: "",
    address: "",
    email: "",
    officialEmail: "",
    education: "",
    university: "",
    phoneNumber: "",
    emergencyContact: "",
    joiningDate: "",
    careerStart: "",
    dob: "",
    cnic: "",
    salary: "",
    incrementalPlan: "",
    bankName: "",
    bankAccount: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();
  const addEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isAddEmployeeModalOpen
  );

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
        isOpen={false}
        contentLabel="Example Modal"
        onAfterOpen={afterOpenModal}
        onRequestClose={closeEmployeeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        <div className=" w-[1084px] mx-auto p-8 bg-white shadow-lg text-[#282F5A] rounded-[8px] relative z-50 ">
          <div className="flex items-center justify-between">
            <h2
              className={`${ttCommonsRegular.className} text-[24px] font-semibold mb-6`}
            >
              New Holiday
            </h2>
            <RxCross1
              className={`cursor-pointer ${ttCommonsBold.className}`}
              size={20}
              onClick={closeEmployeeModal}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div
              className={`grid grid-cols-2 gap-6 ${ttCommonsRegular.className}`}
            >
              {/* Left Column */}
              <div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <FiHash className="mr-1" /> Holiday No.
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                    placeholder="01"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <PiBowlSteamThin className="mr-1" /> Holiday Name
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                    placeholder=" New Year"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <PiNoteDuotone className="mr-1" />
                    Shift
                  </label>
                  <textarea
                    name="Details"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                    placeholder="All Shift"
                    id=""
                  ></textarea>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-4">
                  <label className="flex items-center text-[16px] font-medium mb-1">
                    <GrTableAdd className="mr-1" /> Holiday Date
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                    placeholder="01-01-2022"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <SlLocationPin className="mr-1" />
                    Location
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                    placeholder="All Locations"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <PiNoteDuotone className="mr-1" />
                    Details
                  </label>
                  <textarea
                    name="Details"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                    placeholder="Details."
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Handler */}
            <div
              className={`${ttCommonsRegular.className} flex justify-center mt-6 space-x-4`}
            >
              <button
                type="submit"
                className="h-[48px] w-[155px] cursor-pointer text-[20px] shadow-md text-[#282F5A] rounded-[8px] hover:bg-[#DFECFF80]"
                disabled={true}
              >
                Save
              </button>
              <button
                onClick={closeEmployeeModal}
                type="button"
                className="h-[48px] w-[155px] cursor-pointer text-[20px] shadow-md text-[#DF0D0D] rounded-[8px] hover:bg-[#DF0D0D1A]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default NewHoliday;
