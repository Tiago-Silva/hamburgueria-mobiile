import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface WrapperIconProps {
  isSelected: boolean;
}

export const Container = styled.View`
  width: 300px;
  height: ${RFPercentage(25)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(20)}px;
  margin-left: ${RFValue(25)}px;
  margin-bottom: ${RFValue(25)}px;

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

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WrapperTitles = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleValues = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export const WrapperValues = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Values = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export const Footer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperIcons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(10)}px;
`

export const TouchIcon = styled.TouchableOpacity<WrapperIconProps>`
  margin-right: ${RFValue(20)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; 
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.shape};
  /* padding: ${RFValue(2)}px; */

  transition: background-color 0.3s ease-in-out;
  
  ${({ isSelected }: WrapperIconProps) => 
    isSelected && css`
      background-color: ${({ theme }) => theme.colors.title};
    ` 
  };

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

export const IconPayment = styled(MaterialIcons)`
  /* color: ${({ theme }) => theme.colors.text}; */
`;

export const IconPix = styled(FontAwesome6)`
  /* color: ${({ theme }) => theme.colors.text}; */
`;