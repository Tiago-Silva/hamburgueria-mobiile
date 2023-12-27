import { Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin-top: ${RFValue(20)}px;
`

export const WraperTitle = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: #FFE600;
  font-size: ${RFValue(14)}px;
  font-weight: 700;
`;

export const UserTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 700;
`;

export const WraperIcon = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; 
  border-radius: 10px;
  background: #FFE600;
  padding: ${RFValue(2)}px;

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