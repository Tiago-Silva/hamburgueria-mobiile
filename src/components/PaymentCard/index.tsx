import React, { useState } from "react";
import { 
  Container, 
  Footer, 
  Header, 
  IconPayment, 
  IconPix, 
  TitleValues, 
  TouchIcon, 
  Values, 
  WrapperIcons, 
  WrapperTitles, 
  WrapperValues 
} from "./styles";

interface Props {
  subTotal: number;
}

export const Payment = React.memo (({
  subTotal
}: Props) => {
  const [paymentType, setPaymentType] = useState('pix');

  const handleOnPress = (type: string) => {
    setPaymentType(type);
  };
  
  return (
    <Container>
      <Header>
        <WrapperTitles>
          <TitleValues>Subtotal</TitleValues>
          <TitleValues>Frete</TitleValues>
          <TitleValues>Total</TitleValues>
        </WrapperTitles>

        <WrapperValues>
          <Values>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(subTotal) }
          </Values>
          <Values>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(5) }
          </Values>
          <Values>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(subTotal + 5) }
          </Values>
        </WrapperValues>
      </Header>

      <Footer>
        <TitleValues>Pagamento</TitleValues>

        <WrapperIcons>
          <TouchIcon
            onPress={() => handleOnPress('money')}
            isSelected={paymentType === 'money'}
          >
            <IconPayment 
              name='attach-money'
              size={40}
            />
          </TouchIcon>
          <TouchIcon
            onPress={() => handleOnPress('credit-card')}
            isSelected={paymentType === 'credit-card'}
          >
            <IconPayment 
              name='credit-card'
              size={40}
            />
          </TouchIcon>
          <TouchIcon
            onPress={() => handleOnPress('pix')}
            isSelected={paymentType === 'pix'}
          >
            <IconPix 
              name='pix'
              size={33}
            />
          </TouchIcon>
        </WrapperIcons>
      </Footer>

    </Container>
  );
});