// src/redux/modalSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isAddEmployeeModalOpen: boolean;
  isDeleteEmployeeModalOpen: boolean;
  isEditEmployeeModalOpen: boolean;
  isProfileEmployeeModalOpen: boolean;
  isAddLeaveModalOpen: boolean;
  isDeleteLeaveModalOpen: boolean;
  isProfileLeaveModalOpen: boolean;
  isEditLeaveModalOpen: boolean;
}

const initialState: ModalState = {
  isAddEmployeeModalOpen: false,
  isDeleteEmployeeModalOpen: false,
  isEditEmployeeModalOpen: false,
  isProfileEmployeeModalOpen: false,
  isAddLeaveModalOpen: false,
  isDeleteLeaveModalOpen: false,
  isProfileLeaveModalOpen: false,
  isEditLeaveModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddEmployeeModal: (state) => {
      state.isAddEmployeeModalOpen = true;
    },
    closeAddEmployeeModal: (state) => {
      state.isAddEmployeeModalOpen = false;
    },
    openEditEmployeeModal: (state) => {
      state.isEditEmployeeModalOpen = true;
    },
    closeEditEmployeeModal: (state) => {
      state.isEditEmployeeModalOpen = false;
    },
    openDeleteEmployeeModal: (state) => {
      state.isDeleteEmployeeModalOpen = true;
    },
    closeDeleteEmployeeModal: (state) => {
      state.isDeleteEmployeeModalOpen = false;
    },
    openProfileEmployeeModal: (state) => {
      state.isProfileEmployeeModalOpen = true;
    },
    closeProfileEmployeeModal: (state) => {
      state.isProfileEmployeeModalOpen = false;
    },

    openAddLeaveModal: (state) => {
      state.isAddLeaveModalOpen = true;
    },
    closeAddLeaveModal: (state) => {
      state.isAddLeaveModalOpen = false;
    },
    openDeleteLeaveModal: (state) => {
      state.isDeleteLeaveModalOpen = true;
    },
    closeDeleteLeaveModal: (state) => {
      state.isDeleteLeaveModalOpen = false;
    },
    openProfileLeaveModal: (state) => {
      state.isProfileLeaveModalOpen = true;
    },
    closeProfileLeaveModal: (state) => {
      state.isProfileLeaveModalOpen = false;
    },
    openEditLeaveModal: (state) => {
      state.isEditLeaveModalOpen = true;
    },
    closeEditLeaveModal: (state) => {
      state.isEditLeaveModalOpen = false;
    },
  },
});

export const {
  openAddEmployeeModal,
  closeAddEmployeeModal,
  openEditEmployeeModal,
  closeEditEmployeeModal,
  openDeleteEmployeeModal,
  closeDeleteEmployeeModal,
  openProfileEmployeeModal,
  closeProfileEmployeeModal,
  openAddLeaveModal,
  closeAddLeaveModal,
  openDeleteLeaveModal,
  closeDeleteLeaveModal,
  openProfileLeaveModal,
  closeProfileLeaveModal,
  openEditLeaveModal,
  closeEditLeaveModal,
} = modalSlice.actions;
export default modalSlice.reducer;
