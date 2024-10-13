"use client";
import React, { useState } from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

import { useDispatch, useSelector } from "react-redux";
const PayslipReport = () => {
  const dispatch = useDispatch();
  const [payslipReport, setPayslipReport] = useState([]);

  let columns = [
    { header: "Employee ID", accessor: "empId" },
    { header: "Name", accessor: "name" },
    { header: "Designation", accessor: "designation" },
    { header: "Phone No.", accessor: "phoneNo" },
    { header: "Email Address", accessor: "emailAddress" },
    { header: "Salary", accessor: "salary" },
    { header: "Payslip", accessor: "payslip" },

    { header: "Status", accessor: "status" },
  ];

  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Payslip Report
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Report", label: "Report" },
            { label: " Payslip Report" },
          ]}
        />
      </div>

      <Table
        columns={columns}
        data={payslipReport}
        btnName="Payslip Report"
        onEdit={""}
        onDelete={""}
        onProfile={""}
      />
    </div>
  );
};

export default PayslipReport;
