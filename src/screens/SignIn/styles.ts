import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  background-color: ${({ theme }) => theme.colors.background_header};

  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  text-align: center;

  margin-top: 45px;
`;

export const SignInTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;

  text-align: center;

  margin-top: 80px;
  margin-bottom: 67px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;

  background-color: ${({ theme }) => theme.colors.text};
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;

  justify-content: space-between;
`;