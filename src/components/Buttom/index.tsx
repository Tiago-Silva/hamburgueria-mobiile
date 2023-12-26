import { TouchableOpacityProps } from "react-native";
import { 
  Container, 
  Title } 
from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  borderColor: string;
  backgroundColor: string;
}

export const Buttom = ({
  title,
  borderColor,
  backgroundColor,
  ...rest
}: Props) => {
  return (
    <Container
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}