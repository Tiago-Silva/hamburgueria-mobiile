import { ImageSourcePropType } from "react-native";
import { 
  Amount, 
  Container, 
  IconAdd, 
  Imagem, 
  Title, 
  WrapperIcon
} from "./styles";

interface Props {
  title: string;
  amount: number;
  urlImage: ImageSourcePropType;
}

export const Card = ({
  title,
  amount,
  urlImage
}: Props) => {
  return (
    <Container>
      <WrapperIcon>
        <IconAdd 
          name='add-circle'
          size={24}
        />
      </WrapperIcon>
      <Imagem source={urlImage} />
      <Title>{title}</Title>
      <Amount>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(amount) }
      </Amount>
    </Container>
  );
}