import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ttCommonsRegular } from "@/utils/fonts";
export function Pagination() {
  return (
    <div>
      <div
        className={`flex items-center gap-x-3 justify-end  text-[#282F5A] text-[14px] py-4 px-1 ${ttCommonsRegular.className}`}
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
}
