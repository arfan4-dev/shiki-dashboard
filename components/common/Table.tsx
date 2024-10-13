import React from "react";
import {
  ttCommonsRegular,
  ttCommonsMedium,
  ttCommonsThin,
} from "@/utils/fonts";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

import { Pagination } from "./Pagination";
import TableHeader from "./TableHeader";

const Table = ({ columns, data, btnName, onEdit, onDelete, onProfile }) => {
  console.log("Table:", data);
  return (
    <div>
      <div
        className={`relative text-[#282F5A] overflow-x-auto shadow-md sm:rounded-lg bg-white ml-10`}
      >
        <TableHeader btnName={btnName} />

        <table className="w-full px-4 text-left rtl:text-right">
          <thead
            className={`text-[16px] text-[#ffff] ${ttCommonsThin.className} bg-[#282F5A]`}
          >
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
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column.header}
                </th>
              ))}
              <th className="px-6 py-3 text-left  font-bold">Actions</th>
            </tr>
          </thead>

          <tbody className={`${ttCommonsRegular.className}`}>
            {data.map((row) => (
              <tr
                key={row.empId}
                className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px]`}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-${row.empId}`}
                      type="checkbox"
                      className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white text-[#282F5A]"
                  >
                    {column.accessor === "status" ? (
                      <a className="flex items-center gap-x-1">
                        <GoDotFill
                          color={
                            row.status === "Active" ? "#2AB108" : "#FF0000"
                          } // Green for active, red for inactive
                          size={20}
                        />
                        <p>{row.status}</p> {/* Display the status text */}
                      </a>
                    ) : (
                      row[column.accessor] // Display the normal value for non-status columns
                    )}
                  </td>
                ))}

                <td className="flex items-center px-6 py-4">
                  <p
                    onClick={() => onEdit(row)}
                    className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                  >
                    <FaRegEdit size={20} />
                  </p>
                  <p
                    className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                    onClick={() => onDelete(row.empId)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Table;
