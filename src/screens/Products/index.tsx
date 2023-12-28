import { ImageSourcePropType, ListRenderItem, ListRenderItemInfo } from "react-native";
import { Card } from "../../components/Card";
import { Category } from "../../components/Category";
import { PromotionCard } from "../../components/PromotionCard";
import { Container, WrapperProductsList } from "./styles";

export interface Product {
  idproduto: number,
  nome: string,
  valor: number,
  status: boolean,
  urlImage: ImageSourcePropType,
}

export const Products = () => {

  const data: Product[] = [
    {
      idproduto: 1,
      nome: 'Miami',
      valor: 15.00,
      status: true,
      urlImage: require('.../../../assets/Frame39.png')
    },
    {
      idproduto: 2,
      nome: 'Chicago',
      valor: 17.00,
      status: true,
      urlImage: require('.../../../assets/Frame39.png')
    },
    {
      idproduto: 3,
      nome: 'Flórida',
      valor: 22.00,
      status: true,
      urlImage: require('../../../assets/Frame39.png')
    },
    {
      idproduto: 4,
      nome: 'Louisiana',
      valor: 27.00,
      status: true,
      urlImage: require('.../../../assets/Frame39.png')
    },
    {
      idproduto: 5,
      nome: 'Washington',
      valor: 17.00,
      status: true,
      urlImage: require('.../../../assets/Frame39.png')
    },
    {
      idproduto: 6,
      nome: 'Filadélfia',
      valor: 22.00,
      status: true,
      urlImage: require('../../../assets/Frame39.png')
    },
    {
      idproduto: 7,
      nome: 'Texas',
      valor: 22.00,
      status: true,
      urlImage: require('.../../../assets/Frame39.png')
    },
    {
      idproduto: 8,
      nome: 'Colorado',
      valor: 30.00,
      status: true,
      urlImage: require('../../../assets/Frame39.png')
    }
  ];

  const renderItem = ({ item }: ListRenderItemInfo<Product>) => {
    return (
      <Card 
        title={item.nome}
        amount={item.valor}
        urlImage={item.urlImage}
      />
    );
  };

  return (
    <Container>
      <PromotionCard />
      <Category />
      <WrapperProductsList 
        data={data}
        keyExtractor={(item: Product) => item.idproduto}
        renderItem={renderItem}
        numColumns={2}
      />
      
    </Container>
  );
}