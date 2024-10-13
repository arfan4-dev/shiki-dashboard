"use client";
import React, { useState } from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

import { useDispatch, useSelector } from "react-redux";
const AttendanceReport = () => {
  const dispatch = useDispatch();
  const [attendanceReport, setAttendanceReport] = useState([]);
  let columns = [
    { header: "Employee ID", accessor: "empId" },
    { header: "Name", accessor: "name" },
    { header: "First In", accessor: "firstIn" },
    { header: "Break", accessor: "break" },

    { header: "Last Out", accessor: "lastOut" },
    { header: "Total Hours", accessor: "totalHours" },
    { header: "Status", accessor: "status" },
    { header: "Shift", accessor: "shift" },
  ];

  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Attendance Report
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Report", label: "Report" },
            { label: " Attendance Report" },
          ]}
        />
      </div>

      <Table
        columns={columns}
        data={attendanceReport}
        btnName="Attendance Report"
        onEdit={""}
        onDelete={""}
        onProfile={""}
      />
    </div>
  );
};

export default AttendanceReport;
