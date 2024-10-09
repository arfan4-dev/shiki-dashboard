"use client";

import { ttCommonsRegular } from "@/utils/fonts";
import React from "react";
import GlobalModal from "./GlobalModal";
// import GlobalModal from "../modal/GlobalModal";
import AddModalContent from "@/app/[lang]/(dashboard)/(home)/employees/Modal/AddModalContent";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import AddLeaveModalContent from "@/app/[lang]/(dashboard)/(home)/leave-management/modal/AddLeaveModalContent";
const Button = ({ data, handleOpenModal, addEmployeeModalIsOpen }: any) => {
  const openAddLeaveModal = useSelector(
    (state: RootState) => state.modal.isAddLeaveModalOpen
  );
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className={`text-[14px] w-[126px] rounded-[4px] font-medium ${ttCommonsRegular.className} border-[1px] border-[#282F5A] transition-all duration-200 bg-[#282F5A] hover:bg-transparent text-[#ffff] hover:text-[#282F5A] py-2`}
      >
        {data}
      </button>
      {/* <GlobalModal /> */}
      {pathname === "/en/employees/all-employees" ? (
        <GlobalModal isOpenModal={addEmployeeModalIsOpen}>
          <AddModalContent />
        </GlobalModal>
      ) : pathname === "/en/leave-management/all-leave-request" ? (
        <GlobalModal isOpenModal={openAddLeaveModal}>
          <AddLeaveModalContent />
        </GlobalModal>
      ) : null}
    </div>
  );
};

export default Button;
