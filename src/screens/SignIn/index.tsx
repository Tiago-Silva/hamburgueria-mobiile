import React, { useEffect } from 'react';
import { SignInSocialButton } from '../../components/SignInSocialButton'

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
  Logo
 } from './styles';
import { GoogleIcon } from '../../components/Icons/GoogleIcons';
import { AppleIcon } from '../../components/Icons/AppleIcon';
import { useAuth } from '../../hooks/auth';
import { Alert } from 'react-native';


export const SignIn = () => {
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
    }
  }

  // async function handleSignInWithApple() {
  //   try {
  //     await signInWithApple();
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert('Não foi possível conectar a conta Apple');
  //   }
  // }

  return (
    <Container>
      <Header>
        <TitleWrapper>

          <Logo 
            source={require('../../../assets/alonsao.jpg')}
          />
          
          <Title>
            Peça o seu lanche {'\n'}
            de forma rápida {'\n'}
            e muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            onPress={handleSignInWithGoogle}
            svg={<GoogleIcon />}
          />

          <SignInSocialButton
            title="Entrar com Apple"
            onPress={() => {}}
            svg={<AppleIcon />}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}