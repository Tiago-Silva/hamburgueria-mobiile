import { ImageSourcePropType } from "react-native";
import { 
  Amount, 
  Card, 
  Container, 
  FooterCard, 
  IconAdd, 
  Imagem, 
  Title, 
  WrapperIcon 
} from "./styles";

interface Props {
  title: string;
  amount: number;
  urlImage: ImageSourcePropType,
}

export function  HighLightCard({
  title,
  amount,
  urlImage
}:Props) {
  return (
    <Container>
      <Card>
        <WrapperIcon>
          <IconAdd source={require('../../../assets/Add.png')} />
        </WrapperIcon>
        <Imagem source={urlImage} />

        <FooterCard>
          <Title>{title}</Title>
          <Amount>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(amount) }
          </Amount>

        </FooterCard>
      </Card>
    </Container>
  );
};