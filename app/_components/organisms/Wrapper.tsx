import StyledComponentsRegistry from '../../_utilities/antd_registry';
import ConfigProvider from 'antd/es/config-provider';

const Wrapper = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider>
        {children}
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
}

export default Wrapper;
