import { Card as AntCard } from "antd";

const Card = (props) => {
  const { children, ...restProps } = props;
  return (
    <AntCard {...restProps}>
      {children}
    </AntCard>
  );
}

export default Card;
