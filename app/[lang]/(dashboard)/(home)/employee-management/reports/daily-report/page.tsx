"use client";
import React, { useState } from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

import { useDispatch, useSelector } from "react-redux";
const DailyReport = () => {
  const dispatch = useDispatch();
  const [dailyAttendance, setDailyAttendance] = useState([]);
  let columns = [
    { header: "Employee ID", accessor: "empId" },
    { header: "Name", accessor: "name" },
    { header: "Date", accessor: "date" },
    { header: "Leave Type", accessor: "leaveType" },
    { header: "No. Of Days", accessor: "noOfDays" },
    { header: "Total Leave", accessor: "totalLeave" },
    { header: "Taken", accessor: "taken" },
    { header: "Remaining", accessor: "remaining" },
  ];

  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Daily Report
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Report", label: "Report" },
            { label: " Daily Report" },
          ]}
        />
      </div>

      <Table
        columns={columns}
        data={dailyAttendance}
        btnName="Daily Report"
        onEdit={""}
        onDelete={""}
        onProfile={""}
      />
    </div>
  );
};

export default DailyReport;
