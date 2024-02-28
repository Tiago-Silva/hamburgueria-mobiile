import { 
  Amount, 
  Container, 
  DefaultIcon, 
  IconAdd, 
  Imagem, 
  Title, 
  WrapperIcon
} from "./styles";
import React from "react";
import { ItemData } from "../../interface/ItemData";
import { itemService } from '../../services/itemService';
import { addItemToCart } from '../../store/modules/cart/actions';
import { useAppDispatch } from "../../store/modules/hooks";

interface Props {
  idproduto: number;
  title: string;
  amount: number;
  urlImage: string;
  descricao: string;
}

export const Card = React.memo (({
  idproduto,
  title,
  amount,
  urlImage,
  descricao
}: Props) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = async () => {
    const newItem: ItemData = itemService.creationItem(1, title, amount, amount, idproduto, urlImage);
    dispatch(addItemToCart(newItem));
  };
  return (
    <Container>
      <WrapperIcon onPress={handleAddProduct}>
        <IconAdd 
          name='add-circle'
          size={24}
        />
      </WrapperIcon>
      {urlImage ?
        <Imagem source={{uri: urlImage}} />
        :
        <DefaultIcon name='food' />
      }
      
      <Title>{title}</Title>
      <Amount>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(amount) }
      </Amount>
    </Container>
  );
});