import { Platform, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(20)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.background_card};
  margin-top: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;

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

export const Imagem = styled.Image`
  width: 50%;
  height: 50%;
  flex-shrink: 0;
`;

export const WrapperIcon = styled(TouchableOpacity)`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: -7%;
  right: -10%;
`;

export const IconAdd = styled(Ionicons)`
  position: absolute;
  color: ${({ theme }) => theme.colors.text};
  right: 3%;
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  font-weight: 700;
  right: 60%;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const DefaultIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.text};
`;