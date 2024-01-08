import { ImageSourcePropType } from "react-native";
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
import React, { useEffect, useState } from "react";
import { ItemData } from "../../interface/ItemData";
import { itemService } from "../../services/itemService";

interface Props {
  idproduto: number;
  title: string;
  amount: number;
  urlImage: ImageSourcePropType;
  descricao?: string;
  quantidade: number;
  removeItem: (updatedItemsArray: ItemData[]) => void;
  handleAdd: (valor: number) => void;
  handleSubtract: (amount: number) => void;
}

export const CartCard = ({
  idproduto,
  title,
  amount,
  urlImage,
  descricao,
  quantidade,
  removeItem,
  handleAdd,
  handleSubtract
}: Props) => {
  const [quant, setQuantity] = useState<number>(quantidade);

  const handleAddItem = async () => {
    const newItem: ItemData = itemService.creationItem(1, title, amount, 1, idproduto, urlImage);
    const retrievedItem: ItemData | null = await itemService.retrieveAddItemData(newItem);
  
    setQuantity(retrievedItem?.quantidade || 0);
    handleAdd(amount);
  };

  const handleSubtractItem = async () => {
    const newItem: ItemData = itemService.creationItem(1, title, amount, 1, idproduto, urlImage);
    const retrievedItem: ItemData | null = await itemService.retrieveSubtractItemData(newItem);
  
    setQuantity(retrievedItem?.quantidade || 0);
    handleSubtract(amount);
  };

  useEffect(() => {
    if (quant <= 0) {
      const handleDelete = async (idproduto: number) => {
        try {
          const updateArray: ItemData[] = await itemService.deleteObjectItem(idproduto);
          // Use a updateArray conforme necessário
          removeItem(updateArray);
        } catch (error) {
          throw new Error('Error ao deletar o item');
          console.error('Erro ao deletar o item:', error);
        }
      };
      
      handleDelete(idproduto);
    }
  }, [quant])

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
        <WrapperIcon onPress={handleSubtractItem}>
          <IconSubtract
            name='remove-circle'
            size={30}
          />
        </WrapperIcon>
        
        <TitleFooter>{quant}</TitleFooter>

        <WrapperIcon onPress={handleAddItem}>
          <IconAdd
            name='add-circle'
            size={30}
          />
        </WrapperIcon>
      </Footer>

    </Container>
  );
}