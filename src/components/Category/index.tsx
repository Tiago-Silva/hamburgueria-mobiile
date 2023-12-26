import { Container, Footer, Icon, Title, WrapperIcon } from "./styles";



export const Category = () => {
  return (
    <Container>
      <Title>Categorias</Title>
      <Footer>
        <WrapperIcon>
          <Icon source={require('../../../assets/snacks.png')} />
        </WrapperIcon>
        <WrapperIcon>
          <Icon source={require('../../../assets/drink.png')} />
        </WrapperIcon>
        <WrapperIcon>
          <Icon source={require('../../../assets/milk.png')} />
        </WrapperIcon>
      </Footer>
    </Container>
  );
}