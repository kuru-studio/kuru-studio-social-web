import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

/* 
isOpen: for Modal visibility
title: for Modal title
content: the content of the Modal for example, a login form
*/

export interface ModalState {
  isOpen: boolean;
  content: ReactNode | null;
}

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    /* on show action, we get the title and the content based on the button that has been triggered, ex log-in button 
    will contain title = login, content = <LoginForm />
    */
    show: (state, action: PayloadAction<{ content: ReactNode }>) => {
      state.isOpen = true;
      state.content = action.payload.content;
    },
    hide: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide } = modalSlice.actions;

export default modalSlice.reducer;
