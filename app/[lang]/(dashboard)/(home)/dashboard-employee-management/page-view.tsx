"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsSnapshot from "./components/reports-snapshot";
import CountryMap from "./components/country-map";
import UserDeviceReport from "./components/user-device-report";
import UserStats from "./components/user-stats-chart";
import UsersStat from "./components/users-stat";
import ReportsArea from "./components/reports-area";
// import DashboardSelect from "@/components/dasboard-select";
import TopTen from "./components/top-ten";
import TopPage from "./components/top-page";
// import DatePickerWithRange from "@/components/date-picker-with-range";
import {
  ttCommonsMedium,
  ttCommonsRegular,
  ttCommonsBold,
} from "@/utils/fonts";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Table from "@/components/common/Table";

interface DashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const DashboardPageView = ({ trans }: DashboardPageViewProps) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const isSelected = (id: string) => selectedRows.includes(id);
  return (
    <div className="space-y-6 mt-28 w-[100%]  ">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div
          className={`text-[28px] font-medium ml-10  text-default-800 ${ttCommonsMedium.className}`}
        >
          {/* Analytics {trans?.dashboard} */}
          Welcome Flora !
        </div>
        {/* <DatePickerWithRange /> */}
      </div>
      {/* reports area */}
      <div className="grid grid-cols-12  gap-6 ml-10">
        <div className="col-span-12 lg:col-span-8">
          <ReportsSnapshot />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <UsersStat />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReportsArea />
        </div>
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              New vs Returning Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UserStats />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Device Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="dashtail-legend">
              <UserDeviceReport />
            </div>
          </CardContent>
        </Card>
      </div> */}
      {/* <div className="col-span-2">
        <Card>
          <CardHeader className="border-none pb-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex-1 text-xl font-semibold text-default-900 whitespace-nowrap">
                User By Country
              </div>
              <div className="flex-none">
                <DashboardSelect />
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-5 pb-0">
            <CountryMap />
          </CardContent>
        </Card>
      </div> */}
      {/* <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <TopTen />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardHeader className="border-none pb-0">
              <CardTitle className="pt-2.5">Top Page/Post</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <TopPage />
            </CardContent>
          </Card>
        </div>
      </div> */}
      <Table />
    </div>
  );
};

export default DashboardPageView;
