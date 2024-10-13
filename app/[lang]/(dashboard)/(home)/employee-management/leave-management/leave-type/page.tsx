"use client";
import React,{useState} from "react";

import { ttCommonsDemiBold, ttCommonsRegular } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";


const LeaveType = () => {
     const [allLeaveType, setAllLeaveType] = useState([]);
  let columns = [
    { header: "Leave Name", accessor: "leaveName" },
    { header: "Leave Type", accessor: "leaveType" },
    { header: "Leave Unit", accessor: "leaveUnit" },
    { header: "Duration (Days)", accessor: "uration(Days)" },
    { header: "Created By", accessor: "createdBy" },
 { header: "Status", accessor: "status" }, 
  ];
  return (
    <div className={`space-y-6 mt-28 w-[100%] ${ttCommonsRegular.className}`}>
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
         Leave Types
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Leaves", label: "Leaves" },
            { label: "Leave Types" },
          ]}
        />
      </div>
      <div className="flex justify-end ">
        <Button data="+ Add Leave Type" handleOpenModal={"addLeaveOpenModal"} />
      </div>
      <Table 
       data={allLeaveType}
        columns={columns}
        btnName="Leave Type"
        onProfile={""}
        onEdit={""}
        onDelete={""}
      />
    </div>
  );
};

export default LeaveType;
