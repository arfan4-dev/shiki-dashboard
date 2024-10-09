"use client";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa"; // Import the icons you need
import { TfiCalendar } from "react-icons/tfi";
import { FiHash } from "react-icons/fi";
import { TbBrandReason } from "react-icons/tb";
import { GrTableAdd } from "react-icons/gr";
import { FaFileArrowUp } from "react-icons/fa6";
import { GrStatusPlaceholder } from "react-icons/gr";
import { PiNoteDuotone } from "react-icons/pi";

import { RxCross1 } from "react-icons/rx";
import { ttCommonsRegular, ttCommonsBold } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeAddLeaveModal } from "@/redux/modalSlice/employees";

function AddLeaveModalContent() {
  const openAddLeaveModal = useSelector(
    (state: RootState) => state.modal.isAddLeaveModalOpen
  );
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

  const closeAddLeaveModals = () => {
    dispatch(closeAddLeaveModal());
    document.body.style.overflow = "auto";
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
      <div className=" w-[1084px] mx-auto p-8 bg-white shadow-lg text-[#282F5A] rounded-[0.5px] relative z-50 ">
        <div className="flex items-center justify-between">
          <h2
            className={`${ttCommonsRegular.className} text-[24px] font-semibold mb-6`}
          >
            New Leaves
          </h2>
          <RxCross1
            className={`cursor-pointer ${ttCommonsBold.className}`}
            size={20}
            onClick={closeAddLeaveModals}
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
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder="Dallas Kuechal"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                  {" "}
                  <TfiCalendar className="mr-1" /> Leave From
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder=" 26-07-2324"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                  {" "}
                  <FiHash className="mr-1" /> No. Of Days
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder="04"
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                  <TbBrandReason className="mr-1" /> Reason
                </label>
                <textarea
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder="Reason."
                  id=""
                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="flex items-center text-[16px] font-medium mb-1">
                  <GrTableAdd className="mr-1" /> Leave Type
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder="Medical Leave"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                  <FaFileArrowUp className="mr-1" />
                  Leave To
                </label>
                <input
                  type="text"
                  name="01-07-2023"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder="01-07-2023"
                />
              </div>
              <div className="mb-4">
                <label className=" flex items-center gap-x-1 text-[16px] font-medium mb-1">
                  <GrStatusPlaceholder className="mr-1" />
                  Status
                </label>
                <input
                  type="text"
                  name="Approved"
                  value={formData.officialEmail}
                  onChange={handleChange}
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder="Approved"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
                  <PiNoteDuotone className="mr-1" />
                  Note
                </label>
                <textarea
                  name="Note"
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
                  placeholder="Note."
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
              onClick={closeAddLeaveModals}
              type="button"
              className="h-[48px] w-[155px] cursor-pointer text-[20px] shadow-md text-[#DF0D0D] rounded-[8px] hover:bg-[#DF0D0D1A]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddLeaveModalContent;
