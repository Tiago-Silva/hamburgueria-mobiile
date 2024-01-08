import React, { useEffect, useState } from "react";
import { Container,
  Content, 
  Header,
  TitleCart,
} from "./styles";
import { CartCard } from "../../components/CartCard";
import { ItemData } from "../../interface/ItemData";
import { itemService } from "../../services/itemService";
import { useFocusEffect } from "@react-navigation/native";
import { Payment } from "../../components/PaymentCard";


export const Cart = () => {
  const [itemList, setItemList] = useState<ItemData[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);

  const retrieveItemList = async () => {
    setItemList(await itemService.retrieveItemList());
  };

  const handleUpdateList = (updateListItem: ItemData[]) => {
    setItemList(updateListItem);
  }

  const handleAdd = (amount: number) => {
    setSubTotal((prev) => prev + amount);
  };

  const handleSubtract = (amount: number) => {
    setSubTotal((prev) => prev - amount);
  };

  useFocusEffect(
    React.useCallback(() => {
      retrieveItemList();
    }, [])
  );

  useEffect(() => {
    let sub  = 0;

    itemList.forEach((item) => {
      sub = sub + item.total;
    });

    setSubTotal(sub);

  }, [itemList]);

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
            handleAdd={handleAdd}
            handleSubtract={handleSubtract}
          />
        )}

        <Payment 
          subTotal={subTotal}
        />

      </Content>
      
    </Container>
  );
}