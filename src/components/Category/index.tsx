import { Container, Footer, Icon, Title, WrapperIcon } from "./styles";
import { useState } from "react";

interface Props {
  handleCategorySelected: (category: string) => void;
}

export const Category = ({
  handleCategorySelected
}: Props) => {
  const [category, setCategory] = useState('snacks');

  const handleOnPress = (category: string) => {
    setCategory(category);
    handleCategorySelected(category);
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