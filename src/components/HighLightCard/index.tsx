import { ImageSourcePropType } from "react-native";
import { 
  Amount, 
  Container, 
  FooterCard, 
  IconAdd, 
  Imagem, 
  Title, 
  WrapperContent, 
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
      <WrapperContent>
        <WrapperIcon>
          <IconAdd 
            name='plus-circle'
            size={24}
          />
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
      </WrapperContent>
    </Container>
  );
};