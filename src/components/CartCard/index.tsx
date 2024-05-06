import { 
  Amount,
  Container, 
  Footer, 
  IconAdd, 
  IconSubtract, 
  Imagem, 
  Title,
  TitleFooter,
  WrapperIcon,
} from "./styles";
import React from "react";
import { ItemData } from "../../interface/ItemData";
import { useAppDispatch } from "../../store/modules/hooks";
import { addItemToCart, reduceItemFromCart } from "../../store/modules/cart/actions";

interface Props {
  item: ItemData;
}

export const CartCard: React.FC<Props> = React.memo (({
  item
}: Props) => {
  const dispatch = useAppDispatch();

  const handleAddItem = async () => {
    dispatch(addItemToCart(item));
  };

  const handleSubtractItem = async () => {
    dispatch(reduceItemFromCart(item));
  };

  return (
    <Container>
      <Imagem source={{ uri: item.urlImage }} />
      <Title>{item.descricao}</Title>
      <Amount>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(item.valor) }
      </Amount>
      
      <Footer>
        <WrapperIcon onPress={handleSubtractItem}>
          <IconSubtract
            name='remove-circle'
            size={30}
          />
        </WrapperIcon>
        
        <TitleFooter>{item.quantidade}</TitleFooter>

        <WrapperIcon onPress={handleAddItem}>
          <IconAdd
            name='add-circle'
            size={30}
          />
        </WrapperIcon>
      </Footer>

    </Container>
  );
});