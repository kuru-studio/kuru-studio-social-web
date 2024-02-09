"use client";
import StyledComponentsRegistry from "../../_utilities/antd_registry";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/_data/store";
import { ReactNode } from "react";
import theme from "@/theme/themeConfig";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ReduxProvider store={store}>
        <ConfigProvider theme={theme}>
          <StyleProvider hashPriority="high">{children}</StyleProvider>
        </ConfigProvider>
      </ReduxProvider>
    </StyledComponentsRegistry>
  );
};

export default Wrapper;
