import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ProductData } from "../../interface/ProductData";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${RFPercentage(100)}px;
  /* width: ${RFPercentage(100)}px; */
  /* max-width: 100%; */
  /* max-height: 100%; */
`;

export const WrapperProductsList = styled(
  FlatList as new () => FlatList<ProductData>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
      paddingBottom: '10px'
  }
})`
  margin-top: ${RFPercentage(2)}px;
  margin-bottom: ${RFPercentage(13)}px;
  margin-left: ${RFPercentage(8)}px;
  width: 100%;
`;