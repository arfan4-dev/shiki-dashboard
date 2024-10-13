"use client";
import React,{useState} from "react";

import { ttCommonsDemiBold, ttCommonsRegular } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

const LeaveBalance = () => {
   const [allLeaveBalance, setAllLeaveBalance] = useState([]);
  let columns = [
    { header: "Employee ID", accessor: "employeeId" },
    { header: "Name", accessor: "name" },
    { header: "Total", accessor: "total" },
    { header: "Used", accessor: "used" },
    { header: "Accepted", accessor: "accepted" },
    { header: "Rejected", accessor: "rejected" }, 
 { header: "Remaning", accessor: "remaning" }, 
  ];
  return (
    <div className={`space-y-6 mt-28 w-[100%] ${ttCommonsRegular.className}`}>
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Leave balance
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Leaves", label: "Leaves" },
            { label: "Leave balance" },
          ]}
        />
      </div>
      <div className="flex justify-end ">
        <Button data="+ Add Leave" handleOpenModal={"addLeaveOpenModal"} />
      </div>
      <Table
        data={allLeaveBalance}
        columns={columns}
        btnName="Leave Balance"
        onProfile={""}
        onEdit={""}
        onDelete={""}
      />
    </div>
  );
};

export default LeaveBalance;
