"use client";
import React,{useState} from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

import { useDispatch, useSelector } from "react-redux";
const EmployeeReport = () => {
  const dispatch = useDispatch();
    const [employeeReport, setEmployeeReport] = useState([]);

  let columns = [
    { header: "Employee ID", accessor: "empId" },
    { header: "Name", accessor: "name" },
    { header: "Designation", accessor: "designation" },
    { header: "Phone No.", accessor: "phoneNo" },
    { header: "Email Address", accessor: "emailAddress" },
    { header: "Joining Date", accessor: "joiningDate" },
    { header: "Status", accessor: "status" },
  ];
  
  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
         Employee Report
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Report", label: "Report" },
            { label: " Employee Report" },
          ]}
        />
      </div>
    
      <Table
    columns={columns}
        data={employeeReport}
        btnName="Employee Report"
        onEdit={""}
        onDelete={""}
        onProfile={""}
      />
    </div>
  );
};

export default EmployeeReport;
