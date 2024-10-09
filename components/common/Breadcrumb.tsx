import { ttCommonsRegular } from "@/utils/fonts";
import React from "react";
import { HiHome } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
const Breadcrumb = ({ items }: any) => {


  return (
    <nav
      className={`flex items-center font-medium space-x-2 text-[#6B7280] ${ttCommonsRegular.className} `}
      aria-label="Breadcrumb"
    >
      <ol className="list-reset flex text-[16px]">
        {items.map((item: any, index: number) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <li>
                <span className="text-[#282F5A] mx-1">/</span>
              </li>
            )}
            <li>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`text-[#6B7280] ${
                    index === items.length - 1
                      ? "text-[#6B7280]"
                      : "hover:text-[#282F5A]"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                  'text-[#282F5A]'
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
