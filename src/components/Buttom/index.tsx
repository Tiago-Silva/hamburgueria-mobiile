import { TouchableOpacityProps } from "react-native";
import { 
  Container, 
  Title } 
from "./styles";
import React from "react";

interface Props extends TouchableOpacityProps {
  title: string;
  borderColor: string;
  backgroundColor: string;
}

export const Buttom = React.memo (({
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
});