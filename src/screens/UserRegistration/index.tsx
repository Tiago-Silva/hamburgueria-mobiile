import React, { useEffect, useState } from "react";
import { 
  Container, 
  Header, 
  Title, 
  WrapperInputs 
} from "./styles";
import { Input } from "../../components/Input";
import { Buttom } from "../../components/Buttom";
import { Controller, SubmitHandler, set, useForm } from 'react-hook-form';
import { userRegistrationSchema } from "../../interface/userRegistrationSchema";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import * as SecureStorage from 'expo-secure-store';
import { userService } from "../../services/userService";
import { UserRegisterData } from '../../interface/UserRegisterData';
import { useAuth } from "../../hooks/auth";
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { Loading } from "../../components/Loading";

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;


export type userRegistrationData = z.infer<typeof userRegistrationSchema>;

export const UserRegistration = () => {
  const { setAuthToken, userGoogle, token } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const { control, handleSubmit, setValue, watch } = useForm<userRegistrationData>({
    resolver: zodResolver(userRegistrationSchema)
  });
  const watchedFields = watch(['nome', 'sobreNome', 'telefone', 'cidade', 'bairro', 'endereco', 'email']);

  const handleOnSubmit: SubmitHandler<userRegistrationData> = async (data) => {
    setIsUserRegistered(true);
    setIsButtonDisabled(true);
    try {
      const register: UserRegisterData = {
        nome: data.nome,
        sobreNome: data.sobreNome || '',
        telefone: data.telefone || '', 
        endereco: data.endereco || '',
        email: data.email,
        type: 'MOBILLE',
        idestabelecimento: 1,
        googleAccessToken: userGoogle?.idToken || '',
      };
      const response = await userService.saveUserRegisterAndAuthentication(register)

      if (response) {
        setAuthToken(JSON.stringify(response.data.token));
        await SecureStorage.setItem(storageKey + 'token', JSON.stringify(response.data.token));
        await SecureStorage.setItem(storageKey + 'refreshToken', JSON.stringify(response.data.refreshToken));
      }

    } catch (error) {
      // setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    async function loadUserStorageData() {
      try {
        const currentUser = await GoogleSignin.getCurrentUser();

        if (currentUser && currentUser.user) {
          setValue('nome', currentUser.user.name || '');
          setValue('cidade', 'Itambé');
          setValue('email', currentUser.user.email);
        }
      } catch (error) {
        console.error('Erro ao carregar informações do usuário do Google:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUserStorageData();
  }, [setValue]);

  useEffect(() => {
    const isEveryFieldFilled = watchedFields.every((value) => !!value);
    if (isEveryFieldFilled) {
      if (!isUserRegistered) {
        setIsButtonDisabled(false);
      }
    }
  }, [watchedFields]);

  if (isLoading) {
    return (
      <Loading />
    );
  } else {
    return (
      <Container>
        <Header >
          <Title>Continue o seu cadastro</Title>
        </Header>
  
        <WrapperInputs >
          <Controller 
            control={control}
            name="nome"
            render={({field: {onChange, value}}) => (
              <Input 
                title="Nome"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller 
            control={control}
            name="sobreNome"
            render={({field: {onChange, value}}) => (
              <Input 
                title="Sobrenome"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller 
            control={control}
            name="telefone"
            render={({field: {onChange, value}}) => (
              <Input 
                title="Telefone"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller 
            control={control}
            name="cidade"
            render={({field: {onChange, value}}) => (
              <Input 
                title="Cidade"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller 
            control={control}
            name="bairro"
            render={({field: {onChange, value}}) => (
              <Input 
                title="Bairro"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller 
            control={control}
            name="endereco"
            render={({field: {onChange, value}}) => (
              <Input 
                title="Rua + número"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller 
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <Input 
                title="Email"
                value={value}
                onChangeText={onChange}
                editable={false}
              />
            )}
          />
          <Buttom
            backgroundColor="#000000"
            borderColor="#000000"
            title="Confirmar"
            onPress={handleSubmit(handleOnSubmit)}
            disabled={isButtonDisabled}
            isDisabled={isButtonDisabled}
          />
        </WrapperInputs>
        
      </Container>
    );
  }
  

}