import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  value: boolean;
}

// Define the initial state using that type
const initialState: ModalState = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide } = modalSlice.actions;

export default modalSlice.reducer;
