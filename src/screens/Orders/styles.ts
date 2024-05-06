import styled from "styled-components/native";
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from "react-native";
import { ItemData } from "../../interface/ItemData";
import {PedidoResponseDTO} from "../../interface/PedidoResponseDTO";


export const Container = styled.View`
  flex: 1;
`;

export const ContentOrderList = styled.View`
    flex: 1;
`;

export const OrderList = styled(FlatList as new () => FlatList<PedidoResponseDTO>).attrs({
  showsVerticalScrollIndicator: true,
})`

`;

export const ModalContainer = styled(Modal)`
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

export const WrapperModalContent = styled.View`
  height: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 17px;
`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-weight: bold;
`;

export const ItemList = styled(FlatList as new () => FlatList<ItemData>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 10,
  },
})`
  
`;