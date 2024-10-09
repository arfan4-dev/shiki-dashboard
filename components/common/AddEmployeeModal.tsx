"use client";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaUniversity,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaIdCard,
  FaCity,
} from "react-icons/fa"; // Import the icons you need
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { IoCalendarSharp } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { GiPackedPlanks } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import {
  ttCommonsRegular,
  ttCommonsMedium,
  ttCommonsThin,
  ttCommonsBold,
} from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
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
function EmployeeModal({ addEmployeeModalIsOpen }: any) {
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
        isOpen={addEmployeeModalIsOpen}
        contentLabel="Example Modal"
        onAfterOpen={afterOpenModal}
        onRequestClose={closeEmployeeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        <div className=" w-[1084px] mx-auto p-8 bg-white shadow-lg text-[#282F5A] rounded-md relative z-50 ">
          <div className="flex items-center justify-between">
            <h2
              className={`${ttCommonsRegular.className} text-[24px] font-semibold mb-6`}
            >
              Add Employee Details
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
                    <FaUser className="mr-1" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="Dallas Kuechal"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <FaBuilding className="mr-1" /> Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder=" Manager"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <FaEnvelope className="mr-1" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="dallas@gmail.com "
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <FaUniversity className="mr-1" /> Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="BBA"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <FaPhone className="mr-1" /> Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="+92 327 1234567"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <FaCalendarAlt className="mr-1" /> Joining Date
                  </label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="05-04-2024"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <FaCalendarAlt className="mr-1" /> DOB
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="04-10-1999"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <FaMoneyBillWave className="mr-1" /> Salary
                  </label>
                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="25000"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    {" "}
                    <FaCity className="mr-1" /> Bank Name
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="Faysal Bank"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-4">
                  <label className="flex items-center text-[16px] font-medium mb-1">
                    <FaUser className="mr-1" /> Father Name
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="Keuchal"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <CiLocationOn className="mr-1" />
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="street no 7, house no 67 johar town"
                  />
                </div>
                <div className="mb-4">
                  <label className=" flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <MdOutlineMail className="mr-1" />
                    Official Email
                  </label>
                  <input
                    type="email"
                    name="officialEmail"
                    value={formData.officialEmail}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="arfan@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <FaGraduationCap className="mr-1" />
                    University
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="GC University Lahore"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <CiMobile2 className="mr-1" />
                    Emergency Contact No.
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="03213232323"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <IoCalendarSharp className="mr-1" />
                    Career Start
                  </label>
                  <input
                    type="month"
                    name="careerStart"
                    value={formData.careerStart}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="03-04-2024"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <MdPerson className="mr-1" /> CNIC
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="33100-03232322-11"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <GiPackedPlanks className="mr-1" /> Incremental Plan
                  </label>
                  <input
                    type="text"
                    name="incrementalPlan"
                    value={formData.incrementalPlan}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="Yearly"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                    <BsBank className="mr-1" />
                    Bank Account
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    value={formData.bankAccount}
                    onChange={handleChange}
                    className="w-full py-2 px-6 border border-gray-300 rounded-md"
                    placeholder="0000000000000000000000000"
                  />
                </div>
              </div>
            </div>
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
export default EmployeeModal;
