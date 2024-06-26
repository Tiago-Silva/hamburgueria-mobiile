import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from "react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_promotion};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 15px 15px;
  padding-bottom: ${RFValue(10)}px;

  margin-right: 16px;
`;

export const WrapperContent = styled.View`
  width: 100%;
  height: ${RFPercentage(25)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.background_promotion};

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
  width: 95%;
  height: 95%;
  flex-shrink: 0;
`;

export const FooterCard = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WrapperIcon = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: -7%;
  z-index: 1;
`;

export const IconAdd = styled(Ionicons)`
  position: absolute;
  color: ${({ theme }) => theme.colors.text};
  right: 0.5%;
`;

export const Quantidade = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  font-weight: 700;
  right: -3%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const HighLightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(13)}px;
`;

export const DefaultIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.text};
`;