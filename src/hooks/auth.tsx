import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserInfo } from '../components/Header/styles';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '321326004523-747mmqn53g8bqt82tdl076phq2l5olkp.apps.googleusercontent.com', 
});

const AuthProvider = ({ children }: AuthProviderProps ) => {
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  const userStorageKey = '@gofinances:user';


  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (userInfo && userInfo.user) {
        setUser({
          id: '9887897',
          name: userInfo.user.name || '',
          email: userInfo.user.email,
          photo: userInfo.user.photo || '', 
        })
      }

      console.log({ user });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
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

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await AsyncStorage.getItem('@gofinances:user');
      
      if(userStoraged){
        const userLogged = JSON.parse(userStoraged) as User;
        setUser(userLogged);
      }

      setUserStorageLoading(false);
    }

    loadUserStorageDate();
  },[]);
  

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle,
      signInWithApple
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