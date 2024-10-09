'use client'
// src/components/Modal/GlobalModal.tsx
import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { closeModal } from "../../redux/features/modal/modal.slice";
import { RootState } from "@/redux/store";

// Define a type for the props of the component rendered in the modal
interface ModalState {
  isOpen: boolean;
  componentName: React.ComponentType<any> | null;
  componentProps?: { [key: string]: any };
}

const GlobalModal: FC = () => {
  const dispatch = useDispatch();

  const {
    isOpen,
    componentName: ComponentToRender,
    componentProps,
  } = useSelector((state: RootState): ModalState => state.modal);

  if (!isOpen || !ComponentToRender) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-4 hover:text-gray-6"
          onClick={() => dispatch(closeModal())}
        >
          <FaTimes size={24} />
        </button>
        <ComponentToRender {...componentProps} />
      </div>
    </div>
  );
};

export default GlobalModal;
