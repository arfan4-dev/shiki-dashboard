import React from "react";
import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaUniversity,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCity,
} from "react-icons/fa"; // Import the icons you need
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { IoCalendarSharp } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { GiPackedPlanks } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { ttCommonsRegular, ttCommonsBold } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/features/modal/modal.slice";
import Input from "@/components/common/Input";
const AddModalContent = () => {
  let subtitle;
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    position: "",
    address: "",
    email: "",
    officialEmail: "",
    education: "",
    university: "",
    phoneNumber: "",
    emergencyContact: "",
    joiningDate: "",
    careerStart: "",
    dob: "",
    cnic: "",
    salary: "",
    incrementalPlan: "",
    bankName: "",
    bankAccount: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();

  const closeEmployeeModal = () => {
    document.body.style.overflow = "auto";
    dispatch(closeModal());
  };

  const afterOpenModal = () => {
    // Disable background scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    return () => {
      // Ensure that overflow is reset if the component unmounts while modal is open
      document.body.style.overflow = "auto";
    };
  }, []);

  const formFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      value: formData.name,
      placeholder: "Dallas Keuchal",
      icon: <FaUser className="mr-1" />,
    },
    {
      label: "Father Name",
      name: "fatherName",
      type: "text",
      value: formData.fatherName,
      placeholder: "Keuchal",
      icon: <FaUser className="mr-1" />,
    },
    {
      label: "Position",
      name: "position",
      type: "text",
      value: formData.position,
      placeholder: "Manager",
      icon: <FaBuilding className="mr-1" />,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      value: formData.email,
      placeholder: "dallas@gmail.com",
      icon: <FaEnvelope className="mr-1" />,
    },
    {
      label: "Education",
      name: "education",
      type: "text",
      value: formData.education,
      placeholder: "BBA",
      icon: <FaUniversity className="mr-1" />,
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "text",
      value: formData.phoneNumber,
      placeholder: "+92 327 1234567",
      icon: <FaPhone className="mr-1" />,
    },
    {
      label: "Joining Date",
      name: "joiningDate",
      type: "date",
      value: formData.joiningDate,
      placeholder: "05-04-2024",
      icon: <FaCalendarAlt className="mr-1" />,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      value: formData.dob,
      placeholder: "04-10-1999",
      icon: <FaCalendarAlt className="mr-1" />,
    },
    {
      label: "Salary",
      name: "salary",
      type: "number",
      value: formData.salary,
      placeholder: "25000",
      icon: <FaMoneyBillWave className="mr-1" />,
    },
    {
      label: "Bank Name",
      name: "bankName",
      type: "text",
      value: formData.bankName,
      placeholder: "Faysal Bank",
      icon: <FaCity className="mr-1" />,
    },

    {
      label: "Address",
      name: "address",
      type: "text",
      value: formData.address,
      placeholder: "street no 7, house no 67 johar town",
      icon: <CiLocationOn className="mr-1" />,
    },
    {
      label: "Official Email",
      name: "officialEmail",
      type: "email",
      value: formData.officialEmail,
      placeholder: "arfan@gmail.com",
      icon: <MdOutlineMail className="mr-1" />,
    },
    {
      label: "University",
      name: "university",
      type: "text",
      value: formData.university,
      placeholder: "GC University Lahore",
      icon: <FaGraduationCap className="mr-1" />,
    },
    {
      label: "Emergency Contact No.",
      name: "emergencyContact",
      type: "text",
      value: formData.emergencyContact,
      placeholder: "03213232323",
      icon: <CiMobile2 className="mr-1" />,
    },
    {
      label: "Career Start",
      name: "careerStart",
      type: "month",
      value: formData.careerStart,
      placeholder: "03-04-2024",
      icon: <IoCalendarSharp className="mr-1" />,
    },
    {
      label: "CNIC",
      name: "cnic",
      type: "text",
      value: formData.cnic,
      placeholder: "33100-03232322-11",
      icon: <MdPerson className="mr-1" />,
    },
    {
      label: "Incremental Plan",
      name: "incrementalPlan",
      type: "text",
      value: formData.incrementalPlan,
      placeholder: "Yearly",
      icon: <GiPackedPlanks className="mr-1" />,
    },
    {
      label: "Bank Account",
      name: "bankAccount",
      type: "text",
      value: formData.bankAccount,
      placeholder: "0000000000000000000000000",
      icon: <BsBank className="mr-1" />,
    },
  ];

  return (
    <div>
      <div className=" w-[1084px] mx-auto p-8 bg-white shadow-lg text-[#282F5A] rounded-[0.8px] relative z-50 ">
        <div className="flex items-center justify-between">
          <h2
            className={`${ttCommonsRegular.className} text-[24px] font-semibold mb-6`}
          >
            Add Employee Details
          </h2>
          <RxCross1
            className={`cursor-pointer ${ttCommonsBold.className}`}
            size={20}
            onClick={closeEmployeeModal}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {formFields.map((field) => (
              <Input
                key={field.name}
                data={{
                  ...field,
                  value: formData[field.name],
                  onChange: handleChange,
                }}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <button
              type="submit"
              className="h-[48px] w-[155px] cursor-pointer text-[20px] shadow-md text-[#282F5A] rounded-[8px] hover:bg-[#DFECFF80]"
              disabled={true}
            >
              Save
            </button>
            <button
              onClick={closeEmployeeModal}
              type="button"
              className="h-[48px] w-[155px] cursor-pointer text-[20px] shadow-md text-[#DF0D0D] rounded-[8px] hover:bg-[#DF0D0D1A]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModalContent;
