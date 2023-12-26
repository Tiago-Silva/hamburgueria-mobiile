import { Card } from "../../components/Card";
import { Category } from "../../components/Category";
import { Container } from "./styles";


export const Products = () => {
  return (
    <Container>
      <Category />
      <Card 
        title="Miami"
        amount={15.00}
        urlImage={require('../../../assets/Frame39.png')}
      />
      <Card 
        title="Miami"
        amount={15.00}
        urlImage={require('../../../assets/Frame39.png')}
      />
    </Container>
  );
}