"use client";
import React from "react";

import { ttCommonsDemiBold, ttCommonsRegular } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Table from "@/components/common/Table";

const EmployeeProfile = () => {
  return (
    <div className={`space-y-6 mt-28 w-[100%] ${ttCommonsRegular.className}`}>
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          Profile
        </div>
        <Breadcrumb
          items={[
            { href: "/Dashboard", label: "Dashboard" },
            { href: "/Dashboard/Employee", label: "Employees" },
            { label: "Employee Profile" },
          ]}
        />
      </div>

      <Table data="All Profile" />
    </div>
  );
};

export default EmployeeProfile;
