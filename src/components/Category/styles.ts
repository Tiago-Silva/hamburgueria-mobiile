import { Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface WrapperIconProps {
  isSelected: boolean;
}

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(80)}px;;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-weight: 700;
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  width: ${RFPercentage(20)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(20)}px;
`;

export const WrapperIcon = styled.TouchableOpacity<WrapperIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; 
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(2)}px;

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

export const Icon = styled.Image`
  width: ${RFPercentage(4)}px;
  height: ${RFPercentage(4)}px;
`;