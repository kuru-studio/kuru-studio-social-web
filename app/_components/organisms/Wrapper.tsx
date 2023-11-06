"use client";
import StyledComponentsRegistry from '../../_utilities/antd_registry';
import ConfigProvider from 'antd/es/config-provider';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/app/_data/store'

const Wrapper = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider>
        <ReduxProvider store={store}>
          {children}
        </ReduxProvider>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
}

export default Wrapper;
