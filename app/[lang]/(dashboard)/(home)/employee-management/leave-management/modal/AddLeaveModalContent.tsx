import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { TfiCalendar } from "react-icons/tfi";
import { FiHash } from "react-icons/fi";
import { TbBrandReason } from "react-icons/tb";
import { GrTableAdd } from "react-icons/gr";
import { FaFileArrowUp } from "react-icons/fa6";
import { GrStatusPlaceholder } from "react-icons/gr";
import { PiNoteDuotone } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { ttCommonsRegular, ttCommonsBold } from "@/utils/fonts";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/features/modal/modal.slice";
import Input from "@/components/common/Input";

function AddLeaveModalContent() {
  const [formData, setFormData] = useState({
    name: "",
    leaveFrom: "",
    noOfDays: "",
    reason: "",
    leaveType: "",
    leaveTo: "",
    status: "",
    note: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Your submit logic
  };

  const dispatch = useDispatch();

  const closeAddLeaveModals = () => {
    dispatch(closeModal());
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative z-50">
      <div className="w-[1084px] mx-auto p-8 bg-white shadow-lg text-[#282F5A] rounded-[0.5px] relative z-50">
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
              <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Dallas Kuechal"
                icon={<FaUser />}
                onChange={handleChange}
              />
              <Input
                label="Leave From"
                type="text"
                name="leaveFrom"
                value={formData.leaveFrom}
                placeholder="26-07-2024"
                icon={<TfiCalendar />}
                onChange={handleChange}
              />
              <Input
                label="No. Of Days"
                type="text"
                name="noOfDays"
                value={formData.noOfDays}
                placeholder="04"
                icon={<FiHash />}
                onChange={handleChange}
              />
              <Input
                label="Reason"
                type="text"
                name="reason"
                value={formData.reason}
                placeholder="Reason."
                icon={<TbBrandReason />}
                onChange={handleChange}
                isTextarea={true} // Pass true for textarea
              />
            </div>

            {/* Right Column */}
            <div>
              <Input
                label="Leave Type"
                type="text"
                name="leaveType"
                value={formData.leaveType}
                placeholder="Medical Leave"
                icon={<GrTableAdd />}
                onChange={handleChange}
              />
              <Input
                label="Leave To"
                type="text"
                name="leaveTo"
                value={formData.leaveTo}
                placeholder="01-08-2024"
                icon={<FaFileArrowUp />}
                onChange={handleChange}
              />
              <Input
                label="Status"
                type="text"
                name="status"
                value={formData.status}
                placeholder="Approved"
                icon={<GrStatusPlaceholder />}
                onChange={handleChange}
              />
              <Input
                label="Note"
                type="text"
                name="note"
                value={formData.note}
                placeholder="Note."
                icon={<PiNoteDuotone />}
                onChange={handleChange}
                isTextarea={true} // Pass true for textarea
              />
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
