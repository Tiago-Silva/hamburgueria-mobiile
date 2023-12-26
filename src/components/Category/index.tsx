import { Container, Footer, Icon, Title, WrapperIcon } from "./styles";
import { useState } from "react";



export const Category = () => {
  const [category, setCategory] = useState('');

  const handleOnPress = (category: string) => {
    setCategory(category);
  };
  return (
    <Container>
      <Title>Categorias</Title>
      <Footer>
        <WrapperIcon 
          onPress={() => handleOnPress('snacks')}
          isSelected={category === 'snacks'}
        >
          <Icon source={require('../../../assets/Hamburger.png')} />
        </WrapperIcon>
        <WrapperIcon 
          onPress={() => handleOnPress('drinks')}
          isSelected={category === 'drinks'}
        >
          <Icon source={require('../../../assets/drink.png')} />
        </WrapperIcon>
        <WrapperIcon 
          onPress={() => handleOnPress('milks')}
          isSelected={category === 'milks'}
        >
          <Icon source={require('../../../assets/milkshake.png')} />
        </WrapperIcon>
      </Footer>
    </Container>
  );
}