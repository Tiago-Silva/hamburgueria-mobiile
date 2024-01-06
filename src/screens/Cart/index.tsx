import React from "react";
import { Container, Header, Title } from "./styles";
import { Card } from "../../components/Card";
import { ImageSourcePropType } from "react-native";

const imagePaths: Record<string, ImageSourcePropType> = {
  Frame39: require("../../../assets/Frame39.png"),
  Promotion: require("../../../assets/snack.jpg"),
};

export const Cart = () => {
  return (
    <Container>

      <Header>
        <Title>Confira os produtos do</Title>
        <Title>Carrinho</Title>
      </Header>

      <Card 
        title="Carrinho"
        amount={24.00}
        descricao="Em produção"
        urlImage={imagePaths['Frame39']}
        idproduto={1}
      />
    </Container>
  );
}