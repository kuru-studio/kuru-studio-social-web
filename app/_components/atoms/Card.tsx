import { ReactNode } from "react";
import { Card as AntCard, CardProps } from "antd";
interface ICardProps extends CardProps {
  children: ReactNode;
}

const Card: React.FunctionComponent<ICardProps> = ({
  children,
  ...restProps
}) => {
  return <AntCard {...restProps}>{children}</AntCard>;
};

export default Card;
