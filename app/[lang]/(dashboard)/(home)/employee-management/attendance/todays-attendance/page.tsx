"use client";
import React, { useState } from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

import { useDispatch, useSelector } from "react-redux";
const TodaysAttendence = () => {
  const [todaysAttendance, setTodaysAttendance] = useState([]);
  let columns = [
    { header: "Employee ID", accessor: "empId" },
    { header: "Name", accessor: "name" },
    { header: "First In", accessor: "firstIn" },
    { header: "Last Out", accessor: "lastOut" },
    { header: "Total Hours", accessor: "totalHours" },
    { header: "Status", accessor: "status" },
    { header: "Shift", accessor: "shift" },
  ];
  const dispatch = useDispatch();

  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Todays Attendance
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Attendance", label: "Attendance" },
            { label: " Todays Attendance" },
          ]}
        />
      </div>

      <Table
        columns={columns}
        data={todaysAttendance}
        btnName="Todays Attendance"
        onEdit={""}
        onDelete={""}
        onProfile={""}
      />
    </div>
  );
};

export default TodaysAttendence;
