import { Platform, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";


export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
  top: 0;

  background-color: #2a2e34;

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;

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

export const UserGreeting = styled.Text`
  color: #FFE600;
  font-weight: 700;

  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: #FFE600;
  font-size: ${RFValue(18)}px;
`;

export const LogoutButton = styled(BorderlessButton)`

`;

export const Icon = styled(Feather)`
    color: #FFE600;
    font-size: ${RFValue(18)}px;
`;