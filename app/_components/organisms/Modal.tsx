"use client";
import { useAppSelector, useAppDispatch } from "@/app/_data/hooks";
import { hide } from "@/app/_data/modal";
import { Modal as AntModal } from "antd";

const Modal: React.FunctionComponent = () => {
  const modalState = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <AntModal
      centered
      open={modalState.isOpen}
      onCancel={() => dispatch(hide())}
      footer={null}
    >
      {modalState.content}
    </AntModal>
  );
};

export default Modal;
