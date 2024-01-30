import React, { useEffect, useState } from "react";
import { 
  Container, 
  Header, 
  LoadContainer, 
  Title, 
  WrapperInputs 
} from "./styles";
import { Input } from "../../components/Input";
import { Buttom } from "../../components/Buttom";
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { userRegistrationSchema } from "../../interface/userRegistrationSchema";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userService } from "../../services/userService";
import { UserRegisterData } from '../../interface/UserRegisterData';
import { useAuth } from "../../hooks/auth";
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { Loading } from "../../components/Loading";


export type userRegistrationData = z.infer<typeof userRegistrationSchema>;

export const UserRegistration = () => {
  const { setAuthToken } = useAuth();

  const userStorageKey = '@alonsao_burguer:';
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { control, handleSubmit, setValue, watch } = useForm<userRegistrationData>({
    resolver: zodResolver(userRegistrationSchema)
  });
  const watchedFields = watch(['nome', 'sobreNome', 'telefone', 'cidade', 'bairro', 'endereco', 'email']);

  const handleOnSubmit: SubmitHandler<userRegistrationData> = async (data) => {
    try {
      const register: UserRegisterData = {
        nome: data.nome,
        sobreNome: data.sobreNome || '',
        telefone: data.telefone || '', 
        endereco: data.endereco || '',
        email: data.email,
        type: 'MOBILLE',
        idestabelecimento: 1,
      };
      const response = await userService.saveUserRegisterAndAuthentication(register)

      if (response) {
        setAuthToken(JSON.stringify(response.data));
        await AsyncStorage.setItem(userStorageKey + 'token', JSON.stringify(response.data));
      }

    } catch (error) {
      setIsButtonDisabled(true);
    } finally {
      setIsButtonDisabled(true);
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
          setIsLoading(false); 
        }
      } catch (error) {
        console.error('Erro ao carregar informações do usuário do Google:', error);
        setIsLoading(false);
      }
    }

    loadUserStorageData();
  }, [setValue]);

  useEffect(() => {
    const isEveryFieldFilled = watchedFields.every((value) => !!value);
    if (isEveryFieldFilled) {
      setIsButtonDisabled(false);
    }
  }, [watchedFields]);

  // if (isLoading) {
  //   return (
  //     <Loading />
  //   );
  // }
  

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
              // editable={false}
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