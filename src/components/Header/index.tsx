import React, { useEffect, useState } from "react";
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
import { ActivityIndicator } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as SecureStorage from 'expo-secure-store';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;


export const Header = React.memo (() => {
  const { userGoogle,setAuthUserGoogle, setAuthToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const signOut = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    } finally {
      await SecureStorage.deleteItemAsync(storageKey + 'userGoogle');
      await SecureStorage.deleteItemAsync(storageKey + 'token');
      await SecureStorage.deleteItemAsync(storageKey + 'refreshToken');
      setIsLoading(false);
      setAuthToken('');
      setAuthUserGoogle({'id': '', 'name': '', 'email': '', 'photo': '', 'idToken': ''});
    }
  };

  return (
    <Container>
      <UserWrapper>
        {userGoogle && userGoogle.id && (
          <UserInfo>
            <Photo 
              source={{ uri: userGoogle.photo }}
            />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>{userGoogle.name}</UserName>
            </User>
          </UserInfo>
        )}
        <LogoutButton onPress={signOut} disabled={isLoading}>
          {
            isLoading ? <ActivityIndicator /> :<Icon name='power' />
          }
        </LogoutButton>
      </UserWrapper>
    </Container>
  );
});