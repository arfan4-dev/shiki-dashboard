"use client";
import React,{useState} from "react";

import { ttCommonsDemiBold } from "@/utils/fonts";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

import { useDispatch, useSelector } from "react-redux";
const AllHolidays = () => {
   const [allHolidays, setAllHolidays] = useState([]);
  let columns=[
          { header: 'Holiday No.', accessor: 'id' },
          { header: 'Holiday Name', accessor: 'holidayName' },
          { header: 'Location', accessor: 'location' },
          { header: 'Shift', accessor: 'shift' },
          { header: 'Details', accessor: 'details' },
        ]
 
  const dispatch = useDispatch();

  return (
    <div className="space-y-6 mt-28 w-[100%]">
      <div className="flex flex-wrap gap-4 items-center justify-between ml-10">
        <div
          className={`text-[28px] font-medium text-[#282F5A] ${ttCommonsDemiBold.className}`}
        >
          All Holidays
        </div>
        <Breadcrumb
          items={[
            { href: "/Employee Management", label: "Employee Management" },
            { href: "/Employee Management/Holidays", label: "Holidays" },
            { label: "All Holidays" },
          ]}
        />
      </div>
      <div className="flex justify-end ">
        <Button data="+ Add Holidays" />
      </div>
      <Table
      
         data={allHolidays}
        columns={columns}
        btnName="All Holidays"
        onProfile={""}
        onEdit={""}
        onDelete={""}
       
      />
    </div>
  );
};

export default AllHolidays;
