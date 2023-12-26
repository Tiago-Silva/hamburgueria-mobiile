import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #000000;
  font-weight: 700;
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  width: ${RFPercentage(35)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(20)}px;
`;

export const WrapperIcon = styled.TouchableOpacity`

`;

export const Icon = styled.Image`
  
`;