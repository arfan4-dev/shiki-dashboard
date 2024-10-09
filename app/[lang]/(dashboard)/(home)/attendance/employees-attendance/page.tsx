"use client";
import React from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";
import {
  openAddLeaveModal,
  closeAddLeaveModal,
  openEditEmployeeModal,
  openDeleteEmployeeModal,
  openProfileEmployeeModal,
} from "@/redux/modalSlice/employees";
import { useDispatch, useSelector } from "react-redux";
const EmployeesAttendence = () => {
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
  const addLeaveOpenModal = () => {
    dispatch(openAddLeaveModal());
  };
  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Employees Attendance
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Attendance", label: "Attendance" },
            { label: "  Employees Attendance" },
          ]}
        />
      </div>

      <Table
        data="  Employees Attendance"
        handleModalOpen={profileOpenModal}
        handleEditModalOpen={editEmployeeOpenModal}
        handleDeleteModalOpen={deleteEmployeeOpenModal}
      />
    </div>
  );
};

export default EmployeesAttendence;
