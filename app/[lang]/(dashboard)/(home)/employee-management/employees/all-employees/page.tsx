"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";
import { openModal } from "@/redux/features/modal/modal.slice";
import AddModalContent from "../Modal/AddModalContent";
import EditModalContent from "../Modal/EditModalContent";
import DeleteModalContent from "../Modal/DeleteModalContent";
import ProfileModalContent from "../Modal/ProfileModalContent";

const page = () => {
  const [employees, setEmployees] = useState([]);

  let columns = [
    { header: "Employee ID", accessor: "empId" },
    { header: "Name", accessor: "name" },
    { header: "Designation", accessor: "designation" },
    { header: "Phone No.", accessor: "phoneNo" },
    { header: "Email Address", accessor: "emailAddress" },
    { header: "Joining Date", accessor: "joiningDate" },
    { header: "Status", accessor: "status" },
  ];
  const dispatch = useDispatch();

  const handleAddEmployee = () => {
    dispatch(
      openModal({
        componentName: AddModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };
  const handleEditEmployee = () => {
    dispatch(
      openModal({
        componentName: EditModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };
  const handleDeleteEmployee = () => {
    dispatch(
      openModal({
        componentName: DeleteModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };
  const handleProfileEmployee = () => {
    dispatch(
      openModal({
        componentName: ProfileModalContent,
        componentProps: { someProp: "value" },
      })
    );
  };

  // Fetch employees from backend when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the employee data!", error);
      });
  }, []);

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
        <Button data="+ Add Employee" handleOpenModal={handleAddEmployee} />
      </div>

      <Table
        data={employees}
        columns={columns}
        btnName="All Employee"
        onProfile={handleProfileEmployee}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
};
export default page;
