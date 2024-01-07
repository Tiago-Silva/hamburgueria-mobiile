import React, { useEffect, useState } from "react";
import { Container,
  Content, 
  Header,
  IconPayment,
  IconPix,
  Payment,
  TitleCart,
  TitleValues,
  TouchIcon,
  Values,
  Wrapper,
  WrapperIcons,
  WrapperPaymenttype,
  WrapperTitles,
  WrapperValues
} from "./styles";
import { CartCard } from "../../components/CartCard";
import { ItemData } from "../../interface/Item";
import { itemService } from "../../services/itemService";
import { useFocusEffect } from "@react-navigation/native";


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

        <Payment>
          <Wrapper>
            <WrapperTitles>
              <TitleValues>Subtotal</TitleValues>
              <TitleValues>Frete</TitleValues>
              <TitleValues>Total</TitleValues>
            </WrapperTitles>

            <WrapperValues>
              <Values>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(subTotal) }
              </Values>
              <Values>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(5) }
              </Values>
              <Values>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(subTotal + 5) }
              </Values>
            </WrapperValues>
          </Wrapper>
          
          <WrapperPaymenttype>
            <TitleValues>Pagamento</TitleValues>

            <WrapperIcons>
              <TouchIcon>
                <IconPayment 
                  name='attach-money'
                  size={40}
                />
              </TouchIcon>
              <TouchIcon>
                <IconPayment 
                  name='credit-card'
                  size={40}
                />
              </TouchIcon>
              <TouchIcon>
                <IconPix 
                  name='pix'
                  size={33}
                />
              </TouchIcon>
            </WrapperIcons>
          </WrapperPaymenttype>

        </Payment>

      </Content>
      
    </Container>
  );
}