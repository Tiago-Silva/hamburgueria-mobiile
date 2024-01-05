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
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  
    setTotal(retrievedItem?.total || 0);
  };

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