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
import { PaymentCard } from "../../components/PaymentCard";
import { pedidoservice } from '../../services/pedidoService';
import { ItemEntity } from "../../interface/ItemEntity";
import { tokenService } from "../../services/tokenService";
import { TokenData } from "../../interface/tokenData";
import { ItemRequestDTO } from "../../interface/itemRequestDTO";

export const Cart = () => {
  const [itemList, setItemList] = useState<ItemData[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tokenData, setTokenData] = useState<TokenData>({} as TokenData);

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

  const handleSavePedido = async (paymentType: string) => {
    const newList: ItemRequestDTO[] = [];

    itemList.forEach((item) => {
      let newObject: ItemRequestDTO = {
        quantidade: item.quantidade,
        descricao: item.descricao,
        idproduto: item.idproduto,
      }
      newList.push(newObject);
    });

    const newOrder = pedidoservice.creationPedido(
      (subTotal + 5),
      tokenData.idUser,
      paymentType,
      newList
    )
    pedidoservice.save(newOrder);
    setItemList([]);
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

  useEffect(() => {
    async function loadTokenData() {
      const data = await tokenService.retrieveTokenData();
      if (data){
        setTokenData(data);
      }
    }
    loadTokenData();
  }, []);

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
        {itemList.length > 0 && (
          <PaymentCard 
            subTotal={subTotal}
            handleConfirm={handleSavePedido}
          />
        )}

      </Content>
      
    </Container>
  );
}