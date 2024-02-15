import { ReactNode } from "react";
import { Button as AntButton, ButtonProps } from "antd";
interface IButtonProps extends ButtonProps {
  children: ReactNode;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  ...restProps
}) => {
  return <AntButton {...restProps}>{children}</AntButton>;
};

export default Button;
