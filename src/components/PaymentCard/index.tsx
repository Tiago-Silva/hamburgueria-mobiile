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
import { Buttom } from "../Buttom";

interface Props {
  subTotal: number;
  handleConfirm: (paymentType: string) => void;
}

export const Payment = React.memo (({
  subTotal,
  handleConfirm
}: Props) => {
  const [paymentType, setPaymentType] = useState('PIX');

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
            onPress={() => handleOnPress('DINHEIRO')}
            isSelected={paymentType === 'DINHEIRO'}
          >
            <IconPayment 
              name='attach-money'
              size={40}
            />
          </TouchIcon>
          <TouchIcon
            onPress={() => handleOnPress('CREDITO')}
            isSelected={paymentType === 'CREDITO'}
          >
            <IconPayment 
              name='credit-card'
              size={40}
            />
          </TouchIcon>
          <TouchIcon
            onPress={() => handleOnPress('PIX')}
            isSelected={paymentType === 'PIX'}
          >
            <IconPix 
              name='pix'
              size={33}
            />
          </TouchIcon>
        </WrapperIcons>

        <Buttom 
          backgroundColor="#000000"
          borderColor="#000000"
          title="Confirmar"
          onPress={() => handleConfirm(paymentType)}
        />
      </Footer>

    </Container>
  );
});