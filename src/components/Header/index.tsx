import { 
  Container, 
  Icon, 
  LogoutButton, 
  Photo, 
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper, 
} from "./styles";

export const Header = () => {
  return (
    <Container>
      <UserWrapper>
        <UserInfo>
          <Photo 
            source={{ uri: 'https://avatars.githubusercontent.com/u/9256219?v=4' }}
          />
        <User>
          <UserGreeting>Olá</UserGreeting>
          <UserName>Alonsão Novães</UserName>
        </User>
        </UserInfo>
        <LogoutButton onPress={() => {}}>
          <Icon name='power' />
        </LogoutButton>

      </UserWrapper>
    </Container>
  );
}