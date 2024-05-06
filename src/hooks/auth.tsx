import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

import * as SecureStorage from 'expo-secure-store';
import { UserGoogle } from '../interface/UserGoogle';

const googleClientId = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;


interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  userGoogle: UserGoogle;
  token: string;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
  setAuthToken: (token: string) => void;
  setAuthUserGoogle: (user: UserGoogle ) => void;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

// ['https://www.googleapis.com/auth/drive.readonly']
GoogleSignin.configure({
  scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: googleClientId,
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

const AuthProvider = ({ children }: AuthProviderProps ) => {
  const [userGoogleInfo, setUserGoogleInfo] = useState<UserGoogle>({} as UserGoogle);
  const [token, setToken] = useState<string>('');

  const [userStorageLoading, setUserStorageLoading] = useState(true);


  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo && userInfo.user) {
        setUserGoogleInfo({
          id: userInfo.user.id,
          name: userInfo.user.name || '',
          email: userInfo.user.email,
          photo: userInfo.user.photo || '',
          idToken: userInfo.idToken || '',
        })

        await SecureStorage.setItem(storageKey + 'userGoogle', JSON.stringify(userGoogleInfo));
      }

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('{user cancelled the login flow}' + error.message);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('{operation (e.g. sign in) is in progress already}' + error.message);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('{play services not available or outdated}' + error.message);
        // play services not available or outdated
      } else {
        console.log('{some other error happened}' + error.message);
        // some other error happened
      }
    }
  }

  async function signInWithApple() {
    // try {
    //   const credential = await AppleAuthentication.signInAsync({
    //     requestedScopes: [
    //       AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
    //       AppleAuthentication.AppleAuthenticationScope.EMAIL,
    //     ]
    //   });

    //   if (credential) {
    //     const userLogged = {
    //       id: String(credential.user),
    //       email: credential.email!,
    //       name: credential.fullName!.givenName!,
    //       photo: undefined
    //     };

    //     setUser(userLogged);
    //     await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
    //   }
    // } catch (error) {
    //   throw new Error(error);
    // }
  }

  const setAuthToken = (token: string) => {
    setToken(token);
  }

  const setAuthUserGoogle = (user: UserGoogle) => {
    setUserGoogleInfo(user);
  }

  useEffect(() => {
    async function saveUserGoogleInfo() {
      await SecureStorage.setItem(storageKey + 'userGoogle', JSON.stringify(userGoogleInfo));
    }
    saveUserGoogleInfo();
  }, [userGoogleInfo]);

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await SecureStorage.getItem(storageKey + 'userGoogle');
      const tokenStoraged = await SecureStorage.getItem(storageKey + 'token');
      
      if(userStoraged){
        const userLogged = JSON.parse(userStoraged) as UserGoogle;
        setUserGoogleInfo(userLogged);
      }

      if(tokenStoraged){
        // const userToken = JSON.parse(tokenStoraged) as string;
        setToken(tokenStoraged);
      }

      setUserStorageLoading(false);
    }
    loadUserStorageDate();
  },[]);
  

  return (
    <AuthContext.Provider value={{
      userGoogle: userGoogleInfo,
      token: token,
      signInWithGoogle,
      signInWithApple,
      setAuthToken,
      setAuthUserGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}


function useAuth() {
  const context= useContext(AuthContext);

  return context;
}


export { AuthProvider, useAuth }