"use client";
import React, { useState, useEffect } from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";
import { openModal } from "@/redux/features/modal/modal.slice";
import { useDispatch, useSelector } from "react-redux";
import AddLeaveModalContent from "../modal/AddLeaveModalContent";
import EditLeaveModalContent from "../modal/EditLeaveModalContent";
import DeleteLeaveModalContent from "../modal/DeleteLeaveModalContent";
import ProfileLeaveModalContent from "../modal/ProfileLeaveModalContent";
import axios from "axios";
const AllLeaveRequests = () => {
  const [allLeave, setAllLeave] = useState([]);
  const dispatch = useDispatch();

  let columns = [
    { header: "Employee ID", accessor: "employeeId" },
    { header: "Name", accessor: "name" },
    { header: "Leave Type", accessor: "leaveType" },
    { header: "Leave From", accessor: "leaveFrom" },
    { header: "Leave To", accessor: "leaveTo" },
    { header: "No. Of Days", accessor: "numberOfDays" },
    { header: "Status", accessor: "status" },
  ];

  const handleAddEmployee = () => {
    dispatch(
      openModal({
        componentName: AddLeaveModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };
  const handleEditEmployee = () => {
    dispatch(
      openModal({
        componentName: EditLeaveModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };
  const handleDeleteEmployee = () => {
    dispatch(
      openModal({
        componentName: DeleteLeaveModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };
  const handleProfileEmployee = () => {
    dispatch(
      openModal({
        componentName: ProfileLeaveModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };
  // Fetch employees from backend when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/leave-request")
      .then((response) => {
        setAllLeave(response.data.leaveRequests);
      })
      .catch((error) => {
        console.error("There was an error fetching the employee data!", error);
      });
  }, []);

  console.log(allLeave);
  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Leave Requests
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Leaves", label: "Leaves" },
            { label: "Leave Requests" },
          ]}
        />
      </div>
      <div className="flex justify-end ">
        <Button data="+ Add Leave" handleOpenModal={handleAddEmployee} />
      </div>

      <Table
        data={allLeave}
        columns={columns}
        btnName="All Leave Requests"
        onProfile={handleProfileEmployee}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
};

export default AllLeaveRequests;
