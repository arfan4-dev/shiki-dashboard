import React from "react";
import {
  ttCommonsRegular,
  ttCommonsMedium,
  ttCommonsThin,
  ttCommonsBold,
} from "@/utils/fonts";
// const Input = ({ data }) => {
//   return (
//     <div className={`${ttCommonsRegular.className} `}>
//       <label
//         htmlFor={data.name}
//         className="flex items-center gap-x-1 text-[16px] font-medium mb-1"
//       >
//         {data.icon} {data.label}
//       </label>

//       <input
//         id={data.name}
//         name={data.name}
//         type={data.type}
//         value={data.value}
//         onChange={data.onChange}
//         placeholder={data.placeholder}
//         className="w-full py-2 px-6 border border-gray-300 rounded-[0.8px]"
//       />
//     </div>
//   );
// };

// export default Input;
type InputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  icon?: JSX.Element;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
};
const Input = ({
  label,
  type,
  name,
  value,
  placeholder = "",
  icon,
  onChange,
  isTextarea = false,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label className="flex items-center gap-x-1 text-[16px] font-medium mb-1">
        {icon}
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full py-2 px-6 border border-gray-300 rounded-[0.5px]"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
