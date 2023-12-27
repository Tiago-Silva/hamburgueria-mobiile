import { FlatList, Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: rgba(48, 48, 53, 0.9);
  width: ${RFPercentage(50)}px;

  margin-top: ${RFValue(10)}px;;
  
  ${Platform.select({
  ios: `
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  `,
  android: `
  elevation: 4;
  `,
  })}
`;

export const WrapperImages = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(20)}px;
  /* margin-right: 500px; */
`;

export const PromotionImage = styled.Image`
  width: 80%;
  height: 80%;
  flex-shrink: 0;
  margin-left: ${RFValue(20)}px;
`;