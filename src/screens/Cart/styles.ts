import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`

`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
  top: 0;

  background-color: ${({ theme }) => theme.colors.background_header};

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;

  font-size: ${RFValue(20)}px;
`;