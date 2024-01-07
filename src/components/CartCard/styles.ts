import { Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';


export const Container = styled.View`
  width: 300px;
  height: ${RFPercentage(30)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.background_card};
  margin-top: ${RFValue(20)}px;

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
  width: 40%;
  height: 40%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 15px;
  width: 40%;
`;

export const IconAdd = styled(Ionicons)`
  /* position: absolute; */
  color: ${({ theme }) => theme.colors.text};
`;

export const TitleFooter = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

export const IconSubtract = styled(Ionicons)`
  /* position: absolute; */
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperIcon = styled.TouchableOpacity`

`;