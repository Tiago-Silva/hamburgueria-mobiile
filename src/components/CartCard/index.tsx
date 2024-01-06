import { ImageSourcePropType } from "react-native";
import { 
  Amount,
  Container, 
  Footer, 
  IconAdd, 
  IconSubtract, 
  Imagem, 
  Title,
  TitleFooter
} from "./styles";
import React from "react";

interface Props {
  idproduto: number;
  title: string;
  amount: number;
  urlImage: ImageSourcePropType;
  descricao?: string;
  quantidade: number;
}

export const CartCard = ({
  idproduto,
  title,
  amount,
  urlImage,
  descricao,
  quantidade
}: Props) => {
  return (
    <Container>
      <Imagem source={urlImage} />
      <Title>{title}</Title>
      <Amount>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(amount) }
      </Amount>
      
      <Footer>
        <IconSubtract
          name='remove-circle'
          size={30}
        />
        
        <TitleFooter>{quantidade}</TitleFooter>

        <IconAdd
          name='add-circle'
          size={30}
        />
      </Footer>

    </Container>
  );
}