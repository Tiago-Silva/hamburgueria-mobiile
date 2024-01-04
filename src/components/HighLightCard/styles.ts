import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { Platform } from "react-native";

export const Container = styled.View`
    background-color: #30353c;

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 19px;
    padding-bottom: ${RFValue(10)}px;

    margin-right: 16px;
`;

export const Card = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #30353c;

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
  width: 90%;
  height: 90%;
  flex-shrink: 0;
`;

export const FooterCard = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const WrapperIcon = styled.TouchableOpacity`
  position: absolute;
  top: -7%;
  right: -7%;
  width: 30%;
  height: 30%;
`;

export const IconAdd = styled.Image`
  position: absolute;
  /* top: -12%; */
  right: 0.1%;
  width: 50%;
  height: 50%;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  color: #F6C015;
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