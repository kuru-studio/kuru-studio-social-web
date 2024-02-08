"use client";
import StyledComponentsRegistry from "../../_utilities/antd_registry";
import ConfigProvider from "antd/es/config-provider";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/_data/store";
import { ReactNode } from "react";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider>
        <StyleProvider hashPriority="high">
          <ReduxProvider store={store}>{children}</ReduxProvider>
        </StyleProvider>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Wrapper;
