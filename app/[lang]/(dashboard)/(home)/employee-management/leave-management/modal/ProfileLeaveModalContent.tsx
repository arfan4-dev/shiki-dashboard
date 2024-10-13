import React, { useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  closeProfileLeaveModal,
  openEditEmployeeModal,
} from "@/redux/modalSlice/employees";
import { PiNoteDuotone } from "react-icons/pi";
import { GrStatusPlaceholder, GrTableAdd } from "react-icons/gr";
import { FiHash } from "react-icons/fi";
import { TfiCalendar } from "react-icons/tfi";
import {
  ttCommonsRegular,
  ttCommonsMedium,
  ttCommonsThin,
} from "@/utils/fonts";
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
    background: "transparent", // Transparent content background to only show overlay opacity
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    borderRadius: "0px",
  },
};

const ProfileLeaveModalContent = () => {
  const dispatch = useDispatch();

  const ProfileEmployeecloseModal = () => {
    document.body.style.overflow = "auto";
    dispatch(closeProfileLeaveModal());
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

  function editModalOpen() {
    dispatch(closeProfileLeaveModal());
    dispatch(openEditEmployeeModal());
  }
  return (
    <>
      <div className="bg-white w-[717px] p-10 opacity-100  rounded-[10px] ">
        <div className="flex items-center justify-between mb-6 text-[#282F5A]">
          <p className={`text-[20px] ${ttCommonsMedium.className}`}>
            Dallas Keuchal <br />
            <span className={`text-[18px] text-[#00ABE4] mt-2`}> Manager </span>
          </p>
          <RxCross1
            className="cursor-pointer"
            size={20}
            onClick={ProfileEmployeecloseModal}
          />
        </div>
        <div
          className={`${ttCommonsRegular.className} text-[16px] text-[#6B7280] flex flex-col gap-y-8`}
        >
          <div className="flex gap-x-5 items-center">
            <GrTableAdd className="mr-1" /> <p>Medical Leave</p>
          </div>
          <div className="flex gap-x-5 items-center">
            <TfiCalendar className="mr-1" /> <p>April 10, 2023</p>
          </div>
          <div className="flex gap-x-5 items-center">
            <TfiCalendar className="mr-1" /> <p>May 10, 2023</p>
          </div>
          <div className="flex gap-x-5 items-center">
            <FiHash className="mr-1" /> <p>30</p>
          </div>
          <div className="flex gap-x-5 items-center">
            <GrStatusPlaceholder className="mr-1" /> <p>Approved</p>
          </div>
          <div className="flex gap-x-5 items-center">
            <PiNoteDuotone className="mr-1" />{" "}
            <p>God creature is sixth was abundantly and sea gathered i</p>
          </div>

          <div className="flex gap-x-5 items-start">
            <PiNoteDuotone className="mr-1" size={20} />
            <div>
              <p>
                Fowl darkness our sixth heaven. In image lights fourth a hath
              </p>
              <p>
                {" "}
                don't Abundantly they're, image you're . God creature is sixth{" "}
              </p>
              <p> was abundantly and sea gathered i the two let upon days.</p>
            </div>
          </div>
          <p className="ml-10">
            Very make fly saying light don't. Forth, replenish likeness.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileLeaveModalContent;
