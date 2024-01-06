import { Alert, ImageSourcePropType, ListRenderItemInfo } from "react-native";
import { Card } from "../../components/Card";
import { Category } from "../../components/Category";
import { Container, WrapperProductsList } from "./styles";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductData } from "../../interface/ProductData";
import { Header } from "../../components/Header";
import { HighLightCards } from "../../components/HighLightCard/styles";
import { HighLightCard } from "../../components/HighLightCard";
import { productService } from "../../services/productService";

const imagePaths: Record<string, ImageSourcePropType> = {
  Frame39: require("../../../assets/Frame39.png"),
};

export const Products = () => {

  const [idEstabelecimento, setIdEstabelecimento] = useState<number>(1);
  const [productList, setProductList] = useState<ProductData[]>([]);

  const fetchProductData = async (category: string) => {
    try {
      console.log('consultando');
      const response = await productService.getProductsByCategory(idEstabelecimento, category);
      setProductList(response.data);
      await AsyncStorage.setItem('productsCategory/' + category, JSON.stringify(response.data));
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const retrieveProductsData = async (category: string) => {
    try {
      const storedData = await AsyncStorage.getItem('productsCategory/' + category);
      if (storedData !== null) {
        setProductList(JSON.parse(storedData));
      } else {
        fetchProductData(category);
      }
    } catch (error) {
      console.error('Erro ao recuperar dados do AsyncStorage:', error);
    }
  };

  useEffect(() => {
    retrieveProductsData('snacks');
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<ProductData>) => {
    return (
      <Card 
        title={item.nome}
        amount={item.valor}
        urlImage={imagePaths[item.urlImage]}
        idproduto={item.idproduto}
        descricao={item.descricao}
      />
    );
  };

  return (
    <Container>

      <Header />

      <HighLightCards>

        <HighLightCard 
          title="2 Miami"
          amount={24.00}
          urlImage={require('../../../assets/snack.jpg')}
          idproduto={40}
          descricao='Promoção'
        />
        <HighLightCard 
          title="2 Miami"
          amount={24.00}
          urlImage={require('../../../assets/snack.jpg')}
          idproduto={41}
          descricao='Promoção'
        />
        <HighLightCard 
          title="2 Miami"
          amount={24.00}
          urlImage={require('../../../assets/snack.jpg')}
          idproduto={42}
          descricao='Promoção'
        />
        
      </HighLightCards>

      <Category 
        handleCategorySelected={retrieveProductsData}
      />

      <WrapperProductsList 
        data={productList || []}
        keyExtractor={(item: ProductData) => item.idproduto}
        renderItem={renderItem}
        numColumns={2}
      />

    </Container>
  );
}