import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
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

export const WrapperInputs = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-top: ${RFValue(20)}px;
  /* padding: ${RFValue(10)}px; */
`;
