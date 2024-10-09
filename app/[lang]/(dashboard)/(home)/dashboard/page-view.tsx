"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsSnapshot from "./components/reports-snapshot";
import CountryMap from "./components/country-map";
import UserDeviceReport from "./components/user-device-report";
import UserStats from "./components/user-stats-chart";
import UsersStat from "./components/users-stat";
import ReportsArea from "./components/reports-area";
import DashboardSelect from "@/components/dasboard-select";
import TopTen from "./components/top-ten";
import TopPage from "./components/top-page";
import DatePickerWithRange from "@/components/date-picker-with-range";
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
      <div className="ml-10">
        <div
          className={`relative text-[#282F5A]   overflow-x-auto shadow-md sm:rounded-lg ${ttCommonsBold.className} bg-white`}
        >
          <div className="flex items-center justify-between pb-5 pt-4 px-10">
            <p className="text-[20px] font-medium"> Employees</p>

            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-[279.17px]  ps-10 text-sm text-gray-900 border-b border-gray-300  focus:ring-blue-500 focus:border-b-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-b-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>

          <table className="w-full px-4 text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-[16px] text-[#ffff]    bg-[#282F5A]">
              <tr>
                <th scope="col" className="px-4 py-2">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                    />

                    <label className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Employee ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Designation
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Email Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Joining Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] ${ttCommonsRegular.className}`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
                >
                  SS-7892
                </th>
                <td className="px-6 py-4">Dallas Keuchal</td>
                <td className="px-6 py-4">Developer</td>
                <td className="px-6 py-4">xxx-xxx-xxx</td>
                <td className="px-6 py-4">anna.hines@mail.com</td>
                <td className="px-6 py-4">20-03-2024</td>
                <td className="px-6 py-4 ">
                  {" "}
                  <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                  </a>{" "}
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#282F5A] hover:underline"
                  >
                    <FaRegEdit size={20} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    <RiDeleteBin6Line size={20} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={`flex items-center gap-x-3 justify-end ${ttCommonsRegular.className} text-[#282F5A] text-[14px] py-4 px-1`}
      >
        <div className="flex items-center space-x-2">
          <p className={`  font-semibold`}>Results Per Page</p>
          <select
            name=""
            id=""
            className="border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#282F5A] "
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="All">All</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <p className={``}>1-10 Of 16 </p>
          <button className="cursor-pointer ">
            <FaChevronLeft />
          </button>
          <button className="cursor-pointer ">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageView;
