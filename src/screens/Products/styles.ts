import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ProductData } from "../../interface/ProductData";

export const Container = styled.View`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: ${RFPercentage(100)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(30)}px;

    background-color: #5636D3;

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
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
  margin-bottom: ${RFPercentage(6)}px;
  margin-left: ${RFPercentage(8)}px;
  width: 100%;
`;