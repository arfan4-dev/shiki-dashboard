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
import { TbReportAnalytics } from "react-icons/tb";

const Sidebar = () => {
  const dispatch = useDispatch();
  const addEmployeeOpenModal = () => {
    dispatch(openAddEmployeeModal());
  };
  const addEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isAddEmployeeModalOpen
  );
  const [activeSubItem, setActiveSubItem] = useState(null); // State to track active item

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

  return (
    <div
      className={`bg-white w-[297px] h-[913px] text-[#282F5A] max-h-[calc(100vh-60px)]  shadow-md fixed top-[30px] left-[30px] font-medium ${ttCommonsRegular.className} rounded-[6px] overflow-y-auto scroll-smooth`}
    >
      <div className="px-6 py-4">
        <img src="/images/logo/logo-dark.png" alt="Logo" className=" " />
      </div>
      <hr />

      {/* Dashboard */}
      <div className="px-4 mt-5">
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
            {isDashboardOpen ? (
              <MdKeyboardArrowDown />
            ) : (
              <MdKeyboardArrowRight />
            )}
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
      </div>
      {/* Other Menu Items */}
      <div className=" space-y-2 px-4">
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
          <ul className="ml-6 mt-2 relative border-l-2 border-[#D6E4F9] pl-4">
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
                <Link href={"/employee-management/employees/all-employees"}>
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
                  <Link href="/employee-management/employees/all-employees">
                    <li className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]">
                      <div className="flex items-center gap-x-2">
                        <HiOutlineUsers />
                        All Employees
                      </div>
                    </li>
                  </Link>

                  <li
                    className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
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
                  </li>

                  <Link
                    href={"/employee-management/employees/employee-profile"}
                  >
                    <li
                      className={`flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4] ${
                        isActiveLink("/employees/employee-profile")
                          ? "text-[#00ABE4]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-x-2">
                        <HiOutlineUsers />
                        Employee Profile
                      </div>
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
                      path: "/employee-management/leave-management/all-leave-request",
                    },
                    {
                      id: 2,
                      name: "Leave Balance",
                      path: "/employee-management/leave-management/leave-balance",
                    },
                    {
                      id: 3,
                      name: "Leave Types",
                      path: "/employee-management/leave-management/leave-type",
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
                    >
                      <Link href={subItem.path} passHref>
                        <div className="flex items-center gap-x-2">
                          <TbCalendarWeek />
                          <span>{subItem.name}</span>
                        </div>
                      </Link>
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
                      path: "/employee-management/holidays/all-holidays",
                    },
                    {
                      id: 2,
                      name: "Add Holidays",
                      action: "handleOpenModal", // Open modal on click
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
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
                      path: "/employee-management/attendance/todays-attendance",
                    },
                    {
                      id: 2,
                      name: "Employee Attendance",
                      path: "/employee-management/attendance/employees-attendance",
                    },
                    {
                      id: 3,
                      name: "Attendance Sheet",
                      path: "/employee-management/attendance/attendance-sheet",
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
                    >
                      <Link href={subItem.path} passHref>
                        <div className="flex items-center gap-x-2">
                          <FaClipboard />
                          <span>{subItem.name}</span>
                        </div>
                      </Link>
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
                      path: "/employee-management/payroll/employee-salary",
                    },
                    {
                      id: 2,
                      name: "Salary Slip",
                      path: "/employee-management/payroll/salary-slip",
                    },
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
                    >
                      <Link href={subItem.path} passHref>
                        <div className="flex items-center gap-x-2">
                          <FaMoneyBillWave />
                          <span>{subItem.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Reports */}
            <li className="relative">
              <div
                onClick={toggleReportsDropdown}
                className="flex items-center justify-between gap-2 p-2 text-[16px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
              >
                <div className="flex items-center gap-x-2">
                  <TbReportAnalytics />
                  <span>Reports</span>
                </div>
                {isReportsDropdownOpen ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </div>

              {isReportsDropdownOpen && (
                <ul className="ml-4 mt-2">
                  {[
                    {
                      id: 1,
                      name: "Leave Report",
                      path: "/employee-management/reports/leave-report",
                    },
                    {
                      id: 2,
                      name: "Employee Report",
                      path: "/employee-management/reports/employee-report",
                    },
                    {
                      id: 3,
                      name: "  Payslip Report",
                      path: "/employee-management/reports/payslip-report",
                    },
                    {
                      id:4 ,
                      name: "Attendance Report",
                      path: "/employee-management/reports/attendance-report",
                    },
                    {
                      id: 5,
                      name: "Daily Report",
                      path: "/employee-management/reports/daily-report",
                    },  
                  
                  ].map((subItem) => (
                    <li
                      key={subItem.id}
                      className="flex items-center gap-x-2 p-2 text-[14px] cursor-pointer text-[#282F5A] hover:text-[#00ABE4]"
                    >
                      <Link href={subItem.path} passHref>
                        <div className="flex items-center gap-x-2">
                          <TbReportAnalytics />
                          <span>{subItem.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        )}

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
            className={`flex items-center justify-between px-3 py-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#282F5A] hover:text-white`}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <p className="text-[18px]">{item.label}</p>
            </div>
            <MdKeyboardArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
