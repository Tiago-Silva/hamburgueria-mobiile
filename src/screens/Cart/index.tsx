import React, { useEffect, useState } from "react";
import { Container,
  Content, 
  Header,
  TitleCart
} from "./styles";
import { ImageSourcePropType, ScrollView } from "react-native";
import { CartCard } from "../../components/CartCard";
import { ItemData } from "../../interface/Item";
import { itemService } from "../../services/itemService";
import { useFocusEffect } from "@react-navigation/native";

const imagePaths: Record<string, ImageSourcePropType> = {
  Frame39: require("../../../assets/Frame39.png"),
  Promotion: require("../../../assets/snack.jpg"),
};

export const Cart = () => {
  const [itemList, setItemList] = useState<ItemData[]>([]);

  const retrieveItemList = async () => {
    setItemList(await itemService.retrieveItemList());
  };

  const handleUpdateList = (updateListItem: ItemData[]) => {
    setItemList(updateListItem);
  }

  useFocusEffect(
    React.useCallback(() => {
      retrieveItemList();
    }, [])
  );

  return (
    <Container>

      <Header>
        <TitleCart>Confira os produtos do</TitleCart>
        <TitleCart>Carrinho</TitleCart>
      </Header>

      <Content>
        
        {itemList.map((item) =>
          <CartCard key={item.idproduto}
            title={item.descricao}
            amount={item.valor}
            quantidade={item.quantidade}
            urlImage={item.urlImage}
            idproduto={item.idproduto}
            removeItem={handleUpdateList}
          />
        )}

      </Content>
      
    </Container>
  );
}