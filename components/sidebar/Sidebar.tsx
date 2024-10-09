"use client";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import {
  FaClipboard,
  FaFileAlt,
  FaChartBar,
  FaProjectDiagram,
  FaBuilding,
  FaMoneyBillWave,
  FaBullhorn,
  FaBoxes,
} from "react-icons/fa";
import { TbCalendarWeek } from "react-icons/tb";
import { BsCupHot } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { ttCommonsRegular } from "./../../utils/fonts";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Correct import for getting pathname
import { useDispatch, useSelector } from "react-redux";
import { openAddEmployeeModal } from "@/redux/modalSlice/employees";
const Sidebar = () => {
  const dispatch = useDispatch();
  const addEmployeeOpenModal = () => {
    dispatch(openAddEmployeeModal());
  };
  const addEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isAddEmployeeModalOpen
  );

  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [activeDashboard, setActiveDashboard] = useState(null);
  const [isEmployeeManagementOpen, setEmployeeManagementOpen] = useState(false);
  const [isEmployeeManagementDropdownOpen, setEmployeeManagementDropdownOpen] =
    useState(false);

  const [isEmployeesDropdownOpen, setIsEmployeesDropdownOpen] = useState(false);
  const [isLeaveManagementDropdownOpen, setLeaveManagementDropdownOpen] =
    useState(false);
  const [isHolidaysDropdownOpen, setIsHolidaysDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setIsAttendanceDropdownOpen] =
    useState(false);
  const [isPayrollDropdownOpen, setIsPayrollDropdownOpen] = useState(false); // State for Payroll dropdown
  const [isReportsDropdownOpen, setIsReportsDropdownOpen] = useState(false); // State for Reports dropdown
  const pathname = usePathname(); // Get the current pathname

  const isActiveLink = (path: string) => pathname === path;
  const toggleEmployeeManagement = () => {
    setEmployeeManagementOpen(!isEmployeeManagementOpen);
  };
  const toggleEmployeeManagementDropdown = () => {
    setEmployeeManagementDropdownOpen(!isEmployeeManagementDropdownOpen);
  };

  const toggleDashboardDropdown = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleEmployeesDropdown = () => {
    setIsEmployeesDropdownOpen(!isEmployeesDropdownOpen);
  };

  const toggleLeaveManagementDropdown = () => {
    setLeaveManagementDropdownOpen(!isLeaveManagementDropdownOpen);
  };

  const toggleHolidaysDropdown = () => {
    setIsHolidaysDropdownOpen(!isHolidaysDropdownOpen);
  };

  const toggleAttendanceDropdown = () => {
    setIsAttendanceDropdownOpen(!isAttendanceDropdownOpen);
  };

  const togglePayrollDropdown = () => {
    setIsPayrollDropdownOpen(!isPayrollDropdownOpen);
  };

  const toggleReportsDropdown = () => {
    setIsReportsDropdownOpen(!isReportsDropdownOpen);
  };

  const handleDashboardClick = (index: any) => {
    setActiveDashboard(index);
  };

  console.log(isActiveLink);
  return (
    <div
      className={`bg-white w-[297px] h-[913px] text-[#282F5A] max-h-[calc(100vh-60px)] p-4 shadow-md fixed top-[30px] left-[30px] font-medium ${ttCommonsRegular.className} rounded-[6px] overflow-y-auto scroll-smooth`}
    >
      <div>
        <img src="/images/logo/logo-dark.png" alt="Logo" className="mb-4" />
        <hr />
      </div>

      {/* Dashboard */}
      <div>
        <div
          onClick={toggleDashboardDropdown}
          className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-300 ${
            isDashboardOpen
              ? "bg-[#282F5A] text-white"
              : "hover:bg-[#282F5A] hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <RxDashboard />
            <p
              className={`${ttCommonsRegular.className} text-[18px] font-medium`}
            >
              Dashboard
            </p>
          </div>
          {isDashboardOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </div>

        {isDashboardOpen && (
          <ul className="ml-6 mt-2">
            {[
              "Dashboard 1",
              "Dashboard 2",
              "Dashboard 3",
              "Dashboard 4",
              "Dashboard 5",
            ].map((item, index) => (
              <li
                key={index}
                onClick={() => handleDashboardClick(index)}
                className={`flex items-center gap-2 p-2 text-[16px] cursor-pointer relative ${
                  activeDashboard === index
                    ? "text-[#00ABE4] before:bg-[#00ABE4]"
                    : "text-[#282F5A] hover:text-[#00ABE4]"
                }`}
              >
                <Link href={`/dashboard-${index + 1}`} passHref>
                  <p className="flex items-center gap-2 w-full h-full">
                    <RxDashboard />
                    <span>{item}</span>
                    <div
                      className={`absolute left-[-10px] top-0 h-full w-[2px] ${
                        activeDashboard === index
                          ? "bg-[#00ABE4]"
                          : "bg-[#D6E4F9]"
                      }`}
                    />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Other Menu Items */}
      <div className=" space-y-2">
        <div
          onClick={toggleEmployeeManagement}
          className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-300 ${
            isEmployeeManagementOpen
              ? "bg-[#282F5A] text-white"
              : "hover:bg-[#282F5A] hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <HiOutlineUsers />
            <p
              className={`${ttCommonsRegular.className} text-[18px] font-medium`}
            >
              Employee Management
            </p>
          </div>
          {isEmployeeManagementOpen ? (
            <MdKeyboardArrowDown />
          ) : (
            <MdKeyboardArrowRight />
          )}
        </div>

        {isEmployeeManagementOpen && (
          <ul className="ml-6 mt-2">
            {/* Employees with Dropdown */}
            <li className="relative">
              <div
                onClick={toggleEmployeeManagementDropdown}
                className={`${
                  isEmployeeManagementDropdownOpen
                    ? "text-[#00ABE4] hover:text-[#00ABE4]"
                    : "text-[#282F5A] hover:text-[#00ABE4]"
                } flex items-center justify-between gap-2 p-2 text-[16px] cursor-pointer`}
              >
                <Link href={"/employees/all-employees"}>
                  <div className="flex items-center gap-x-2">
                    <HiOutlineUsers />
                    <span>Employees</span>
                  </div>
                </Link>

                {isEmployeeManagementDropdownOpen ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </div>

              {isEmployeeManagementDropdownOpen && (
                <ul className="ml-4 mt-2">
                  <Link href="/employees/all-employees">
                    <li className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] relative">
                      <div className="flex items-center gap-x-2">
                        <HiOutlineUsers />
                        All Employees
                      </div>
                      <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-[#D6E4F9]" />
                    </li>
                  </Link>

                  <li
                    className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] relative"
                    onClick={addEmployeeOpenModal}
                  >
                    <div
                      className={`flex items-center gap-x-2 ${
                        addEmployeeModalIsOpen && "text-[#00ABE4]"
                      }`}
                    >
                      <HiOutlineUsers />
                      Add Employees
                    </div>
                    <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-[#D6E4F9]" />
                  </li>

                  <Link href={"/employees/employee-profile"}>
                    <li
                      className={`flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] relative ${
                        isActiveLink("/employees/employee-profile")
                          ? "text-[#00ABE4]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-x-2">
                        <HiOutlineUsers />
                        Employee Profile
                      </div>
                      <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-[#D6E4F9]" />
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            {/* Leave Management */}
            <li className="relative">
              <div
                onClick={toggleLeaveManagementDropdown}
                className={`flex items-center justify-between gap-2 p-2 text-[16px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]`}
              >
                <div className="flex items-center gap-x-2">
                  <TbCalendarWeek />
                  <span>Leave Management</span>
                </div>
                {isLeaveManagementDropdownOpen ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </div>

              {isLeaveManagementDropdownOpen && (
                <ul className="ml-4 mt-2">
                  {[
                    {
                      id: 1,
                      name: "All Leave Requests",
                      path: "/leave-management/all-leave-request",
                    },
                    {
                      id: 2,
                      name: "Leave Balance",
                      path: "/leave-management/leave-balance",
                    },
                    {
                      id: 3,
                      name: "Leave Types",
                      path: "/leave-management/leave-type",
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] relative"
                    >
                      <Link href={subItem.path} passHref>
                        <div className="flex items-center gap-x-2">
                          <TbCalendarWeek />
                          <span>{subItem.name}</span>
                        </div>
                      </Link>
                      <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-[#D6E4F9]" />
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Holidays with Dropdown */}
            <li className="relative">
              <div
                onClick={toggleHolidaysDropdown}
                className="flex items-center justify-between gap-2 p-2 text-[16px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
              >
                <div className="flex items-center gap-x-2">
                  <BsCupHot />
                  <span>Holidays</span>
                </div>
                {isHolidaysDropdownOpen ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </div>

              {isHolidaysDropdownOpen && (
                <ul className="ml-4 mt-2">
                  {[
                    {
                      id: 1,
                      name: "All Holidays",
                      path: "/holidays/all-holidays",
                    },
                    {
                      id: 2,
                      name: "Add Holidays",
                      action: "handleOpenModal", // Open modal on click
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] relative"
                    >
                      {subItem.path ? (
                        <Link href={subItem.path} passHref>
                          <div className="flex items-center gap-x-2">
                            <BsCupHot />
                            <span>{subItem.name}</span>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-x-2">
                          <BsCupHot />
                          <span>{subItem.name}</span>
                        </div>
                      )}
                      <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-[#D6E4F9]" />
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Attendance */}
            <li className="relative">
              <div
                onClick={toggleAttendanceDropdown}
                className="flex items-center justify-between gap-2 p-2 text-[16px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
              >
                <div className="flex items-center gap-x-2">
                  <FaClipboard />
                  <span>Attendance</span>
                </div>
                {isAttendanceDropdownOpen ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </div>

              {isAttendanceDropdownOpen && (
                <ul className="ml-4 mt-2">
                  {[
                    {
                      id: 1,
                      name: "Today Attendance",
                      path: "/attendance/todays-attendance",
                    },
                    {
                      id: 2,
                      name: "Employee Attendance",
                      path: "/attendance/employees-attendance",
                    },
                    {
                      id: 3,
                      name: "Attendance Sheet",
                      path: "/attendance/attendance-sheet",
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] relative"
                    >
                      <Link href={subItem.path} passHref>
                        <div className="flex items-center gap-x-2">
                          <FaClipboard />
                          <span>{subItem.name}</span>
                        </div>
                      </Link>
                      <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-[#D6E4F9]" />
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Payroll */}
            <li className="relative">
              <div
                onClick={togglePayrollDropdown}
                className="flex items-center justify-between gap-2 p-2 text-[16px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
              >
                <div className="flex items-center gap-x-2">
                  <FaMoneyBillWave />
                  <span>Payroll</span>
                </div>
                {isPayrollDropdownOpen ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </div>

              {isPayrollDropdownOpen && (
                <ul className="ml-4 mt-2">
                  {[
                    {
                      id: 1,
                      name: "Employee Salary",
                      path: "/payroll/employee-salary",
                    },
                    {
                      id: 2,
                      name: "Salary Slip",
                      path: "/payroll/salary-slip",
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] relative"
                    >
                      <Link href={subItem.path} passHref>
                        <div className="flex items-center gap-x-2">
                          <FaMoneyBillWave />
                          <span>{subItem.name}</span>
                        </div>
                      </Link>
                      <div className="absolute left-[-10px] top-0 h-full w-[2px] bg-[#D6E4F9]" />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
      {[
        { icon: <FaBoxes />, label: "Inventory Management" },
        { icon: <FaProjectDiagram />, label: "Project Management" },
        { icon: <FaBuilding />, label: "Construct Site" },
        { icon: <FaMoneyBillWave />, label: "Payroll" },
        { icon: <FaChartBar />, label: "Reports" },
        { icon: <FaBullhorn />, label: "Marketing" },
      ].map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#282F5A] hover:text-white`}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <p className="text-[18px]">{item.label}</p>
          </div>
          <MdKeyboardArrowRight />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
