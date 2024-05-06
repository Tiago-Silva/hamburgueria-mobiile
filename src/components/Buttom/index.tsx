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
  isDisabled: boolean;
}

export const Buttom = React.memo (({
  title,
  borderColor,
  backgroundColor,
  isDisabled,
  ...rest
}: Props) => {
  return (
    <Container
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      isDisabled={isDisabled}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
});