import React from "react";
import { 
  Container, 
  Header, 
  Title, 
  WrapperInputs 
} from "./styles";
import { Input } from "../../components/Input";
import { Buttom } from "../../components/Buttom";
import { Controller, SubmitHandler, UseFormHandleSubmit, useForm } from 'react-hook-form';
import { userRegistrationSchema } from "../../interface/userRegistrationSchema";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';


export type userRegistrationData = z.infer<typeof userRegistrationSchema>;

export const UserRegistration = () => {
  const { control, handleSubmit } = useForm<userRegistrationData>({
    resolver: zodResolver(userRegistrationSchema),
      defaultValues: {
        nome: 'Ricardo',
        sobreNome: 'Brito',
        cidade: 'Itambé',
        bairro: 'Felipe Achy',
        endereco: 'Rua central número 15',
        login: 'email@provider',
        password: '123456789'
      },
  });

  const handleOnSubmit: SubmitHandler<userRegistrationData> = (data) => {
    console.log(JSON.stringify(data));
  };
  

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
          name="login"
          render={({field: {onChange, value}}) => (
            <Input 
              title="Login"
              value={value}
              onChangeText={onChange}
              editable={false}
            />
          )}
        />
        <Controller 
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <Input 
              title="Senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />
        <Buttom
          backgroundColor="#000000"
          borderColor="#000000"
          title="Confirmar"
          onPress={handleSubmit(handleOnSubmit)}
        />
      </WrapperInputs>
      
    </Container>
  );
}