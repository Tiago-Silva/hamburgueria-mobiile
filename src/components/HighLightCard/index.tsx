import { ImageSourcePropType } from "react-native";
import { 
  Amount, 
  Container, 
  FooterCard, 
  IconAdd, 
  Imagem, 
  Quantidade, 
  Title, 
  WrapperContent, 
  WrapperIcon 
} from "./styles";
import React, { useEffect, useState } from "react";
import { ItemData } from "../../interface/Item";
import { itemService } from "../../services/itemService";

interface Props {
  idproduto: number;
  title: string;
  amount: number;
  urlImage: ImageSourcePropType;
  descricao: string;
}

export const  HighLightCard = React.memo (({
  idproduto,
  title,
  amount,
  urlImage,
  descricao
}:Props) => {
  const [quantidade, setQuantidade] = useState<number>(0);

  const handleAddProduct = async () => {
    const newItem: ItemData = itemService.creationItem(1, descricao, amount, 1, idproduto);
    const retrievedItem: ItemData | null = await itemService.retrieveItemData(newItem);
  
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
  }, []);

  return (
    <Container>
      <WrapperContent>
        <WrapperIcon onPress={handleAddProduct}>
          {quantidade > 0 && (
            <Quantidade>{quantidade}</Quantidade>
          )}
          <IconAdd 
            name='add-circle'
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
});