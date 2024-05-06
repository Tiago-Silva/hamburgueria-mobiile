import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(5)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F6C015;
  bottom: ${RFPercentage(0)}px;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 700;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(6)}px;
`;