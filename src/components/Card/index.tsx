import { 
  Amount, 
  Container, 
  DefaultIcon, 
  IconAdd, 
  Imagem, 
  Title, 
  Total, 
  WrapperIcon
} from "./styles";
import React, { useEffect, useState } from "react";
import { ItemData } from "../../interface/ItemData";
import { itemService } from '../../services/itemService';
import { useSelector } from 'react-redux';

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
  const [quantidade, setQuantidade] = useState<number>(0);

  const cart = useSelector((state: any) => state);

  console.log('cart: ', cart);

  const handleAddProduct = async () => {
    const newItem: ItemData = itemService.creationItem(1, title, amount, amount, idproduto, urlImage);
    const retrievedItem: ItemData | null = await itemService.retrieveAddItemData(newItem);
  
    setQuantidade(retrievedItem?.quantidade || 0);
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const newItem: ItemData = await itemService.retrieveItemObject(idproduto);
        setQuantidade(newItem?.quantidade);
      } catch (error) {
        // console.error('Erro ao recuperar o item: ', error);
      }
    };
  
    fetchItem();
  }, [idproduto]);

  return (
    <Container>
      <WrapperIcon onPress={handleAddProduct}>
        {quantidade > 0 && (
          <Total>{quantidade}</Total>
        )}
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