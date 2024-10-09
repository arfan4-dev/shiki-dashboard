"use client";
import React from "react";
import {
  openEditEmployeeModal,
  openDeleteEmployeeModal,
  openProfileEmployeeModal,
  openAddEmployeeModal,
} from "@/redux/modalSlice/employees";
import { useDispatch, useSelector } from "react-redux";
import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const editEmployeeOpenModal = () => {
    dispatch(openEditEmployeeModal());
  };
  const deleteEmployeeOpenModal = () => {
    dispatch(openDeleteEmployeeModal());
  };
  const profileOpenModal = () => {
    dispatch(openProfileEmployeeModal());
  };
  const addOpenModal = () => {
    dispatch(openAddEmployeeModal());
  };
  const addEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isAddEmployeeModalOpen
  );
  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Employees
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Employee", label: "Employees" },
            { label: "All Employees" },
          ]}
        />
      </div>
      <div className="flex justify-end ">
        <Button
          data="+ Add Employee"
          handleOpenModal={addOpenModal}
          addEmployeeModalIsOpen={addEmployeeModalIsOpen}
        />
      </div>
      <Table
        data="All Employee"
        handleModalOpen={profileOpenModal}
        handleEditModalOpen={editEmployeeOpenModal}
        handleDeleteModalOpen={deleteEmployeeOpenModal}
      />
    </div>
  );
};

export default AddEmployee;
