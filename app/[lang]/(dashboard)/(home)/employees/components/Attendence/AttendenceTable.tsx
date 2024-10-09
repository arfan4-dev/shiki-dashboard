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
import NewHoliday from "../Holidays/modal/NewHoliday";
import AddSalaryModal from "../payroll/modal/AddSalaryModal";

const AttendenceTable = () => {
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
    <div className={`${ttCommonsRegular.className} `}>
      <div className="flex items-center justify-between mb-5 py-5 px-16 bg-white ml-10 rounded-[0.5px]">
        <div className="flex flex-col items-center  gap-y-4">
          <p className="text-[#282F5A] text-[20px]">Dallas Keuchal</p>
          <p className="text-[18px] text-[#6B7280]">Manager</p>
        </div>
        <div className="flex flex-col items-center  gap-y-4">
          <p className="text-[#282F5A] text-[20px]">Employee ID</p>
          <p className="text-[18px] text-[#6B7280]">SS-7867</p>
        </div>
        <div className="flex flex-col items-center  gap-y-4">
          <p className="text-[#282F5A] text-[20px]">Joining Date</p>
          <p className="text-[18px] text-[#6B7280]">20-04-2021</p>
        </div>
        <div className="flex flex-col items-center  gap-y-4">
          <p className="text-[#282F5A] text-[20px]">Joining Date</p>
          <p className="text-[18px] text-[#6B7280]">20-04-2021</p>
        </div>
      </div>

      <div
        className={`relative text-[#282F5A]  overflow-x-auto shadow-md sm:rounded-lg  bg-white ml-10`}
      >
        <div className="flex items-center justify-between py-10 px-16">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-[#00ABE4] text-[20px]">08:00</p>
            <p className="text-[18px] text-[#6B7280]">Average Working Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-[#00ABE4] text-[20px]">10:30 AM</p>
            <p className="text-[18px] text-[#6B7280]">Average Time In</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-[#00ABE4] text-[20px]">07:30 PM</p>
            <p className="text-[18px] text-[#6B7280]">Average Out Time</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-[#00ABE4] text-[20px]">01:00</p>
            <p className="text-[18px] text-[#6B7280]">Average Break Time</p>
          </div>
        </div>

        <table className="w-full  px-4 text-left rtl:text-right  ">
          <thead
            className={`text-[16px] text-[#ffff] ${ttCommonsThin.className}   bg-[#282F5A]`}
          >
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Check In
              </th>
              <th scope="col" className="px-6 py-3">
                Check Out
              </th>
              <th scope="col" className="px-6 py-3">
                Working Hours
              </th>
              <th scope="col" className="px-6 py-3">
                Shift
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`${ttCommonsRegular.className}`}>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                15-05-2024
              </th>
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                10:30
              </td>
              <td className="px-6 py-4">7:30</td>
              <td className="px-6 py-4">8 hours</td>
              <td className="px-6 py-4">Day</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Present</p>
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
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                15-05-2024
              </th>
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                10:30
              </td>
              <td className="px-6 py-4">7:30</td>
              <td className="px-6 py-4">8 hours</td>
              <td className="px-6 py-4">Day</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Present</p>
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
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                15-05-2024
              </th>
              <td className="px-6 py-4" onClick={profileEmployeeOpenModal}>
                10:30
              </td>
              <td className="px-6 py-4">7:30</td>
              <td className="px-6 py-4">8 hours</td>
              <td className="px-6 py-4">Day</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Present</p>
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
    </div>
  );
};

export default AttendenceTable;
