import React, { useEffect, useState } from 'react';
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
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from '../../components/Loading';

export const SignIn = () => {
  const { signInWithGoogle, signInWithApple, setAuthUserGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const userStorageKey = '@alonsao_burguer:';

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

  useEffect(() => {

    const checkCurrentUser = async () => {
      try {
        // Verifica se há serviços do Google Play disponíveis
        await GoogleSignin.hasPlayServices();

        // Verifica se há um usuário autenticado anteriormente
        const hasPreviousSignIn = await GoogleSignin.isSignedIn();

        if (hasPreviousSignIn) {
          // Obtém informações sobre o usuário atualmente autenticado, se houver
          const userInfo = await GoogleSignin.signInSilently();
          if (userInfo && userInfo.user) {
            // console.log(userInfo);
            setAuthUserGoogle({
              id: userInfo.user.id,
              name: userInfo.user.name || '',
              email: userInfo.user.email,
              photo: userInfo.user.photo || '', 
            })
            setIsLoading(false);
          } else {
            setIsLoading(false);
            console.log('Nenhum usuário autenticado');
          }
        } else {
          setIsLoading(false);
          console.log('Nenhum usuário autenticado anteriormente');
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Erro ao verificar usuário autenticado:');
      }
    };

    checkCurrentUser();
  },[]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

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