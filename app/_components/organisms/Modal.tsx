"use client";
import { useAppSelector, useAppDispatch } from "@/app/_data/hooks";
import { hide } from "@/app/_data/modal";
import { Modal as AntModal } from "antd";

const Modal: React.FunctionComponent = () => {
  const modal = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  return (
    <AntModal
      title="test"
      open={modal}
      onCancel={() => dispatch(hide())}
      footer={null}
    />
  );
};

export default Modal;
