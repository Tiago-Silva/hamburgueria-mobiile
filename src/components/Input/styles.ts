import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  display: flex;
  justify-content: flex-start;
  width: ${RFValue(200)}px;
`;

export const Title = styled.Text`
  display: flex;
  justify-content: flex-start;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export const TextInput = styled.TextInput`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1px 10px;
  font-size: ${RFValue(14)}px;
  color: rgba(48, 48, 53, 0.55);
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
`;