import { 
  Container, 
  Icon, 
  Title,
  UserTitle, 
  WraperIcon, 
  WraperTitle 
} from "./styles";

export const Header = () => {
  return (
    <Container>
      <WraperTitle>
        <Title>Olá</Title>
        <UserTitle>Alonsão Novães</UserTitle>
      </WraperTitle>

      <WraperIcon>
        <Icon source={require('../../../assets/User.png')}/>
      </WraperIcon>
    </Container>
  );
}