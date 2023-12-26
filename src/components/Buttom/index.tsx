import { Container, Title } from "./styles";

interface Props {
  title: string;
  borderColor: string;
  backgroundColor: string;
}

export const Buttom = ({
  title,
  borderColor,
  backgroundColor
}: Props) => {
  return (
    <Container
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      <Title>{title}</Title>
    </Container>
  );
}