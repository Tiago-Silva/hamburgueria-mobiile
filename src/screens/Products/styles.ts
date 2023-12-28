import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Product } from ".";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${RFPercentage(90)}px;
`;

export const WrapperProductsList = styled(
  FlatList as new () => FlatList<Product>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
      paddingBottom: '10px'
  }
})`
  margin-top: ${RFPercentage(2)}px;
  margin-bottom: ${RFPercentage(3)}px;
  margin-left: ${RFPercentage(34)}px;
  width: 100%;
`;