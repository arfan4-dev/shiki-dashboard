import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import {
  ttCommonsRegular,
  ttCommonsMedium,
  ttCommonsThin,
} from "@/utils/fonts";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  openEditEmployeeModal,
  openDeleteEmployeeModal,
  openProfileEmployeeModal,
} from "@/redux/modalSlice/employees";
import { useDispatch, useSelector } from "react-redux";
import LeaveProfileModal from "./modal/LeaveProfileModal";
import NewHoliday from "../Holidays/modal/NewHoliday";
import AddSalaryModal from "../payroll/modal/AddSalaryModal";

const LeaveTable = () => {
  const dispatch = useDispatch();
  const editEmployeeOpenModal = () => {
    dispatch(openEditEmployeeModal());
  };
  const deleteEmployeeOpenModal = () => {
    dispatch(openDeleteEmployeeModal());
  };
  const profileEmployeeOpenModal = () => {
    dispatch(openProfileEmployeeModal());
  };

  return (
    <div>
      <div
        className={`relative text-[#282F5A]   overflow-x-auto shadow-md sm:rounded-lg  bg-white ml-10`}
      >
        <div className="flex items-center justify-between pb-5 pt-4 px-10">
          <p
            className={`text-[20px] font-medium text-[#282F5A] ${ttCommonsMedium.className}`}
          >
            {" "}
            Leave Requests
          </p>

          <form>
            <label className="mb-2 text-[12px]  font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4  dark:text-gray-400"
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
                className={`block w-[279.17px] ps-10 p-2 text-[14px]  text-gray-900 border-b border-gray-300  focus:ring-blue-500 focus:border-b-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-b-blue-500`}
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>

        <table className="w-full  px-4 text-left rtl:text-right  ">
          <thead
            className={`text-[16px] text-[#ffff] ${ttCommonsThin.className}   bg-[#282F5A]`}
          >
            <tr>
              <th scope="col" className="px-4 py-2">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className={`w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
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
                Leave Type
              </th>
              <th scope="col" className="px-6 py-3">
                Leave Form
              </th>
              <th scope="col" className="px-6 py-3">
                Leave to
              </th>
              <th scope="col" className="px-6 py-3">
                No. Of Days
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className={`${ttCommonsRegular.className}`}>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
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
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                Dallas Keuchal
              </td>
              <td className="px-6 py-4">Medical Leave</td>
              <td className="px-6 py-4">12-05-2024</td>
              <td className="px-6 py-4">15-05-2024</td>
              <td className="px-6 py-4">04</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <p
                  onClick={editEmployeeOpenModal}
                  className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </p>
                <p
                  className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                  onClick={deleteEmployeeOpenModal}
                >
                  <RiDeleteBin6Line size={20} />
                </p>
              </td>
            </tr>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
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
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                Dallas Keuchal
              </td>
              <td className="px-6 py-4">Medical Leave</td>
              <td className="px-6 py-4">12-05-2024</td>
              <td className="px-6 py-4">15-05-2024</td>
              <td className="px-6 py-4">04</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <p
                  onClick={editEmployeeOpenModal}
                  className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </p>
                <p
                  className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                  onClick={deleteEmployeeOpenModal}
                >
                  <RiDeleteBin6Line size={20} />
                </p>
              </td>
            </tr>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
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
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                Dallas Keuchal
              </td>
              <td className="px-6 py-4">Medical Leave</td>
              <td className="px-6 py-4">12-05-2024</td>
              <td className="px-6 py-4">15-05-2024</td>
              <td className="px-6 py-4">04</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <p
                  onClick={editEmployeeOpenModal}
                  className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </p>
                <p
                  className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                  onClick={deleteEmployeeOpenModal}
                >
                  <RiDeleteBin6Line size={20} />
                </p>
              </td>
            </tr>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
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
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                Dallas Keuchal
              </td>
              <td className="px-6 py-4">Medical Leave</td>
              <td className="px-6 py-4">12-05-2024</td>
              <td className="px-6 py-4">15-05-2024</td>
              <td className="px-6 py-4">04</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <p
                  onClick={editEmployeeOpenModal}
                  className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </p>
                <p
                  className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                  onClick={deleteEmployeeOpenModal}
                >
                  <RiDeleteBin6Line size={20} />
                </p>
              </td>
            </tr>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
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
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                Dallas Keuchal
              </td>
              <td className="px-6 py-4">Medical Leave</td>
              <td className="px-6 py-4">12-05-2024</td>
              <td className="px-6 py-4">15-05-2024</td>
              <td className="px-6 py-4">04</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <p
                  onClick={editEmployeeOpenModal}
                  className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </p>
                <p
                  className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                  onClick={deleteEmployeeOpenModal}
                >
                  <RiDeleteBin6Line size={20} />
                </p>
              </td>
            </tr>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
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
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                Dallas Keuchal
              </td>
              <td className="px-6 py-4">Medical Leave</td>
              <td className="px-6 py-4">12-05-2024</td>
              <td className="px-6 py-4">15-05-2024</td>
              <td className="px-6 py-4">04</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <p
                  onClick={editEmployeeOpenModal}
                  className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </p>
                <p
                  className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                  onClick={deleteEmployeeOpenModal}
                >
                  <RiDeleteBin6Line size={20} />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className={`flex items-center gap-x-3 justify-end  text-[#282F5A] text-[14px] py-4 px-1`}
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

      {/* <EditEmployeeModal />
      <DeleteEmployeeModal />*/}
      {/* <LeaveProfileModal /> */}
      {/* <NewHoliday /> */}
      <AddSalaryModal/>
    </div>
  );
};

export default LeaveTable;
