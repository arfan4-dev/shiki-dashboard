"use client";

import React, { useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Modal from "react-modal";
import { ttCommonsRegular, ttCommonsMedium } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "@/redux/features/modal/modal.slice";
import EditModalContent from "../Modal/EditModalContent";
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

const ProfileModalContent = () => {
  const dispatch = useDispatch();

  const closeProfileModal = () => {
    document.body.style.overflow = "auto";
    dispatch(closeModal());
  };

  useEffect(() => {
    return () => {
      // Ensure that overflow is reset if the component unmounts while modal is open
      document.body.style.overflow = "auto";
    };
  }, []);

  function editModalOpen() {
    dispatch(closeModal());
    dispatch(
      openModal({
        componentName: EditModalContent,
        componentProps: { someProp: "value" },
      })
    );
  }
  return (
    <div className="bg-white w-[1084px] p-10 opacity-100  rounded-[10px] ">
      <div className="flex items-center justify-between mb-6 text-[#282F5A]">
        <p className={`text-[20px] ${ttCommonsMedium.className}`}>
          Dallas Keuchal
        </p>
        <RxCross1
          className="cursor-pointer"
          size={20}
          onClick={closeProfileModal}
        />
      </div>
      <div className=" text-[#282F5A] bg-[#DFECFF66] rounded-[10px] p-10">
        <div className="flex items-center gap-x-5 ">
          {/* Personal Information */}
          <div className="w-[582px] bg-white rounded-[4px] shadow-md">
            <div className="flex items-center justify-between px-4 py-3">
              <h2
                className={`text-[18px] font-semibold ${ttCommonsMedium.className}`}
              >
                Personal Information
              </h2>

              <div
                className="rounded-full p-2 hover:bg-[#F2F2F2]  cursor-pointer"
                onClick={editModalOpen}
              >
                <MdOutlineEdit />
              </div>
            </div>
            <hr />
            <div
              className={`grid grid-cols-2 gap-4 px-4 py-3 ${ttCommonsRegular.className}`}
            >
              <div className="space-y-2">
                <p className="text-[16px]">Name</p>
                <p className="text-[16px] text-[#6B7280]">Dallas Keuchal</p>
              </div>
              <div className="space-y-2">
                <p className="text-[16px]">Father Name</p>
                <p className="text-[16px] text-[#6B7280]">Keuchal</p>
              </div>
              <div className="space-y-2">
                <p className="text-[16px]">Education</p>
                <p className="text-[16px] text-[#6B7280]">BS Designing</p>
              </div>
              <div className="space-y-2">
                <p className="text-[16px]">DOB</p>
                <p className="text-[16px] text-[#6B7280]">12-03-1997</p>
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div className="w-[281px] bg-white rounded-[4px] shadow-md">
            <div className="flex items-center justify-between ">
              <h2
                className={`text-[18px] font-semibold px-4 py-3 ${ttCommonsMedium.className}`}
              >
                Bank Information
              </h2>

              <div
                className="rounded-full p-2 hover:bg-[#F2F2F2] cursor-pointer"
                onClick={editModalOpen}
              >
                <MdOutlineEdit />
              </div>
            </div>
            <hr />
            <div
              className={`grid grid-cols-1 gap-4 px-4 py-3 ${ttCommonsRegular.className}`}
            >
              <div className="space-y-2">
                <p className="text-[16px]">Bank Name</p>
                <p className="text-[16px] text-[#6B7280]">HBL</p>
              </div>
              <div className="space-y-2">
                <p className="text-[16px]">Bank Account</p>
                <p className="text-[16px] text-[#6B7280]">00000000000000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-[582px] bg-white rounded-[4px] shadow-md mt-5">
          <div className="flex items-center justify-between px-4 py-3">
            <h2
              className={`text-[18px] font-semibold ${ttCommonsMedium.className}`}
            >
              Contact Information
            </h2>

            <div
              className="rounded-full p-2 hover:bg-[#F2F2F2] cursor-pointer"
              onClick={editModalOpen}
            >
              <MdOutlineEdit />
            </div>
          </div>

          <hr />
          <div
            className={`grid grid-cols-2 gap-4 px-4 py-3 ${ttCommonsRegular.className}`}
          >
            <div className="space-y-2">
              <p className="text-[16px]">Email Address</p>
              <p className="text-[16px] text-[#6B7280]">
                DallasKeuchal@gmail.com
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[16px]">Phone number</p>
              <p className="text-[16px] text-[#6B7280]">+0123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModalContent;
