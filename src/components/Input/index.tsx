import { 
  Container, 
  Line, 
  TextInput, 
  Title,
} from "./styles";

import { Text, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  title: string;
}

export const Input = ({
  title,
  ...rest
}: Props) => {
  return (
    <Container >
      <Title >{title}</Title>
      <TextInput {...rest}/>
      <Line />
    </Container>
  );
}