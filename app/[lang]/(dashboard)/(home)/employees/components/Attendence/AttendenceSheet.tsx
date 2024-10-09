import {
  ttCommonsDemiBold,
  ttCommonsRegular,
  ttCommonsThin,
  ttCommonsBold,
} from "@/utils/fonts";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCalendar2Check } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { PiXCircleBold } from "react-icons/pi";

const AttendenceSheet = () => {
  return (
    <div
      className={`relative text-[#282F5A]  overflow-x-auto shadow-md sm:rounded-lg  bg-white ml-10`}
    >
      <div>
        <p className={`text-[20px] ${ttCommonsBold.className} py-5 px-5`}>
          Attendence Sheet
        </p>
      </div>
      <div
        className={`flex items-center justify-between py-8 px-16 ${ttCommonsRegular.className}`}
      >
        <div className={`flex items-center gap-x-5 `}>
          <form className="w-[330px] mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <BsCalendar2Check />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[330px] h-[37px] ps-10 text-[14px] text-[#6B7280] border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Choose Start Date"
              />
            </div>
          </form>

          <form className="w-[330px] mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <BsCalendar2Check />
              </div>
              <input
                type="search"
                id="default-search"
                className="block  w-[330px] h-[37px] ps-10 text-[14px] text-[#6B7280] border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Choose End date"
              />
            </div>
          </form>
        </div>
        <div>
          <button
            type="submit"
            className="h-[37px] w-[128px] cursor-pointer text-[18px] shadow-md text-[#282F5A] rounded-[8px] hover:bg-[#DFECFF80]"
          >
            Search
          </button>
        </div>
      </div>

      <table className="w-full  divide-y divide-[#6B7280]  px-4 text-left rtl:text-right  ">
        <thead
          className={`text-[16px] text-[#ffff] ${ttCommonsThin.className}   bg-[#282F5A]`}
        >
          <tr className="divide-x divide-[#6B7280]">
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            {Array.from({ length: 30 }, (_, i) => (
              <th key={i + 1} scope="col" className="px-1 py-1 text-center">
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={`${ttCommonsRegular.className} divide-y divide-[#6B7280]`}
        >
          <tr
            className={`bg-white cursor-pointer divide-x divide-[#6B7280]  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
            >
              Dallas Keuchal
            </th>
            <td className="px-1 py-1 ">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1 text-center">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1 ">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <PiXCircleBold
                color={"#df0d0d"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>

            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>

            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <PiXCircleBold
                color={"#df0d0d"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
          </tr>
          <tr
            className={`bg-white cursor-pointer divide-x divide-[#6B7280]  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
            >
              Dallas Keuchal
            </th>
            <td className="px-1 py-1 ">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1 text-center">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1 ">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <PiXCircleBold
                color={"#df0d0d"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>

            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>

            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <PiXCircleBold
                color={"#df0d0d"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
          </tr>
          <tr
            className={`bg-white cursor-pointer divide-x divide-[#6B7280]   hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
            >
              Dallas Keuchal
            </th>
            <td className="px-1 py-1 ">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1 text-center">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1 ">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <PiXCircleBold
                color={"#df0d0d"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>

            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>

            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <PiXCircleBold
                color={"#df0d0d"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              <MdOutlineStarPurple500
                color={"#ffc107"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
            <td className="px-1 py-1">
              {" "}
              <FaRegCircleCheck
                color={"#2ab108"}
                size={18}
                className="jusitfy-center flex w-full items-center"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendenceSheet;
