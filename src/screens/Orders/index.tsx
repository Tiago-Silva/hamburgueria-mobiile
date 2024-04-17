

import React, { useState } from 'react';

import {
  Container, ContentOrderList,
  ItemList,
  ModalContainer,
  ModalTitle, OrderList,
  WrapperModalContent,
} from './styles';
import { Header } from '../../components/Header';
import { PedidoResponseDTO } from '../../interface/PedidoResponseDTO';
import { pedidoservice } from '../../services/pedidoService';
import { tokenService } from '../../services/tokenService';
import { itemService } from '../../services/itemService';
import { ItemData } from '../../interface/ItemData';
import { ItemCard } from '../../components/ItemCard';
import { useFocusEffect } from '@react-navigation/native';
import { Loading } from '../../components/Loading';
import {ListRenderItemInfo} from "react-native";
import {OrderCard} from "../../components/OrderCard";


export const Orders = () => {
  const [orderList, setOrderList] = useState<PedidoResponseDTO[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<ItemData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPedidosByUserId = async () => {
    setIsLoading(true);
    const tokenData = await tokenService.retrieveTokenData();

    if (!tokenData) {
      throw new Error('Token not found');
    }

    const response = await pedidoservice.getPedidoByUserId(tokenData.idUser);

    setOrderList(response.data);
    setIsLoading(false);
  }

  const handleItems = async (oderId: number) => {
    setIsLoading(true);
    const response =  await itemService.getItemByOrderId(oderId);
    setItems(response.data);
    setModalVisible(true);
    setIsLoading(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      getPedidosByUserId();
    }, [])
  );

  const HandleRenderItem = ({ item }: ListRenderItemInfo<ItemData>) => <ItemCard item={item} />;

  const HandlerRenderOrders = ({ item }: ListRenderItemInfo<PedidoResponseDTO>) => {
    return (
      <OrderCard
        order={item}
        handleItems={handleItems}
      />
    );
  }

  return (
    <Container>

      <Header />

      {isLoading && <Loading />}

      <ContentOrderList>
        <OrderList
          data={orderList}
          keyExtractor={(order: PedidoResponseDTO) => String(order.idpedido)}
          renderItem={HandlerRenderOrders}
        />
      </ContentOrderList>

      {/*{orderList.map((order, index) => (*/}
      {/*  <OrderCard */}
      {/*    key={index}*/}
      {/*    order={order}*/}
      {/*    handleItems={handleItems}*/}
      {/*  />*/}
      {/*))}*/}

      <ModalContainer isVisible={isModalVisible} onBackdropPress={closeModal}>
        <WrapperModalContent>
          <ModalTitle>Veja os itens do seu pedido</ModalTitle>
          <ItemList 
            data={items}
            keyExtractor={(item: ItemData) => String(item.iditem)}
            renderItem={HandleRenderItem}
          />
        </WrapperModalContent>
      </ModalContainer>

    </Container>
  );
}
