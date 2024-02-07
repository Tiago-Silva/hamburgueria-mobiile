import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_header};
  
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  margin-top: 16px;
  padding: 17px 24px;
`;

export const WrapperInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
`;

export const InfoValue = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Total = styled.Text`
  font-size: ${RFValue(25)}px;

  color: ${({ theme }) => theme.colors.success};
`;
