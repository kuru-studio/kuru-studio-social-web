import { Button as AntButton } from "antd";

const Button = (props) => {
  const { children, ...restProps } = props;
  return (
    <AntButton {...restProps}>
      {children}
    </AntButton>
  );
}

export default Button;
