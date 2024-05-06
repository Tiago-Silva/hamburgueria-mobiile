

import React from 'react';

import {
  Amount,
  Container, 
  Footer, 
  Icon, 
  InfoDate, 
  Payment, 
  PaymentType, 
  Title,
  WrapperAmount,
} from './styles';
import { PedidoResponseDTO } from '../../interface/PedidoResponseDTO';

interface Props {
  order: PedidoResponseDTO;
  handleItems: (idorder: number) => void;
}

export const OrderCard = ({
  order,
  handleItems
}: Props) => {
  return (
    <Container>
      <Title>
        Número do pedido: #{order.idpedido}
      </Title>

      <WrapperAmount onPress={() => handleItems(order.idpedido)}>
        <Amount>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(order.total) }
        </Amount>
      </WrapperAmount>

      <Footer>
        <Payment>
          <Icon 
            name={'dollar-sign'}
          />
          <PaymentType>
            {order.tipoPagamento}
          </PaymentType>
        </Payment>

        <InfoDate>
          {new Intl.DateTimeFormat('pt-BR')
            .format(new Date(order.data))}
        </InfoDate>
      </Footer>
    </Container>
  );
}
