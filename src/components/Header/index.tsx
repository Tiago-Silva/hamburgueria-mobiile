import React, { useState } from "react";
import { 
  Container, 
  Icon, 
  LogoutButton, 
  Photo, 
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper, 
} from "./styles";
import { useAuth } from "../../hooks/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Loading } from '../../components/Loading';
import { ActivityIndicator } from "react-native";
import * as SecureStorage from 'expo-secure-store';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;


export const Header = React.memo (() => {
  const { userGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const signOut = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // usuário foi deslogado
    } catch (error) {
      console.error(error);
    } finally {
      await SecureStorage.deleteItemAsync(storageKey + 'userGoogle');
      await SecureStorage.deleteItemAsync(storageKey + 'token');
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <UserWrapper>
        <UserInfo>
          <Photo 
            source={{ uri: userGoogle.photo }}
          />
        <User>
          <UserGreeting>Olá</UserGreeting>
          <UserName>{userGoogle.name}</UserName>
        </User>
        </UserInfo>
        <LogoutButton onPress={signOut} disabled={isLoading}>
          {
            isLoading ? <ActivityIndicator /> :<Icon name='power' />
          }
        </LogoutButton>

      </UserWrapper>
    </Container>
  );
});