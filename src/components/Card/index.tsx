import { ImageSourcePropType } from "react-native";
import { 
  Amount, 
  Container, 
  IconAdd, 
  Imagem, 
  Title, 
  Total, 
  WrapperIcon
} from "./styles";
import { useEffect, useState } from "react";
import { ItemData } from "../../interface/Item";
import { itemService } from '../../services/itemService';

interface Props {
  idproduto: number;
  title: string;
  amount: number;
  urlImage: ImageSourcePropType;
  descricao: string;
}

export const Card = ({
  idproduto,
  title,
  amount,
  urlImage,
  descricao
}: Props) => {
  const [total, setTotal] = useState<number>(0);

  const handleAddProduct = async () => {
    const newItem: ItemData = itemService.creationItem(1, descricao, amount, 1, idproduto);
    const retrievedItem: ItemData | null = await itemService.retrieveItemData(newItem);
  
    setTotal(retrievedItem?.quantidade || 0);
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const newItem: ItemData = await itemService.retrieveItemObject(idproduto);
        setTotal(newItem?.quantidade);
      } catch (error) {
        // console.error('Erro ao recuperar o item: ', error);
      }
    };
  
    fetchItem();
  }, []);

  return (
    <Container>
      <WrapperIcon onPress={handleAddProduct}>
        {total > 0 && (
          <Total>{total}</Total>
        )}
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