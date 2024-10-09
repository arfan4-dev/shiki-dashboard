"use client";
import React from "react";

import { ttCommonsDemiBold, ttCommonsRegular } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

const LeaveType = () => {
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
      <Table data="Leave Types" />
    </div>
  );
};

export default LeaveType;
