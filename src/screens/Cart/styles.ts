import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: ${RFPercentage(100)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
  top: 0;

  background-color: ${({ theme }) => theme.colors.background_header};

  justify-content: center;
  align-items: center;
`;

export const TitleCart = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;

  font-size: ${RFValue(20)}px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    /* position: absolute;
    margin-top: ${RFPercentage(13)}px; */
`;