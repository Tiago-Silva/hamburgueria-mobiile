

import React, { useEffect, useState } from 'react';

import {
  Container, 
  ItemList, 
  ModalContainer,
  ModalTitle,
  WrapperModalContent, 
} from './styles';
import { Header } from '../../components/Header';
import { OrderCard } from '../../components/OrderCard/index';
import { PedidoResponseDTO } from '../../interface/PedidoResponseDTO';
import { pedidoservice } from '../../services/pedidoService';
import { tokenService } from '../../services/tokenService';
import { itemService } from '../../services/itemService';
import { ItemData } from '../../interface/ItemData';
import { ItemCard } from '../../components/ItemCard';
import { useFocusEffect } from '@react-navigation/native';
import { Loading } from '../../components/Loading';


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

  const HandleRenderItem = ({ item }) => <ItemCard item={item} />;

  return (
    <Container>

      <Header />

      {isLoading && <Loading />}

      {orderList.map((order, index) => (
        <OrderCard 
          key={index}
          order={order}
          handleItems={handleItems}
        />
      ))}

      <ModalContainer isVisible={isModalVisible} onBackdropPress={closeModal}>
        <WrapperModalContent>
          <ModalTitle>Veja os itens do seu pedido</ModalTitle>
          <ItemList 
            data={items}
            keyExtractor={(item) => String(item.iditem)}
            renderItem={HandleRenderItem}
          />
        </WrapperModalContent>
      </ModalContainer>

    </Container>
  );
}
