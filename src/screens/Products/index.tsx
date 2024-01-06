import { Alert, ImageSourcePropType, ListRenderItemInfo } from "react-native";
import { Card } from "../../components/Card";
import { Category } from "../../components/Category";
import { Container, WrapperProductsList } from "./styles";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductData } from "../../interface/ProductData";
import { Header } from "../../components/Header";
import { HighLightCards } from "../../components/HighLightCard/styles";
import { HighLightCard } from "../../components/HighLightCard";
import { productService } from "../../services/productService";

const imagePaths: Record<string, ImageSourcePropType> = {
  Frame39: require("../../../assets/Frame39.png"),
  Promotion: require("../../../assets/snack.jpg"),
};

export const Products = () => {

  const [idEstabelecimento, setIdEstabelecimento] = useState<number>(1);
  const [productList, setProductList] = useState<ProductData[]>([]);
  const [promotions, setPromotions] = useState<ProductData[]>([]);

  const fetchProductData = async (category: string) => {
    try {
      console.log('consultando');
      const response = await productService.getProductsByCategory(idEstabelecimento, category);

      await AsyncStorage.setItem('productsCategory/' + category, JSON.stringify(response.data));

      if (category === 'promotion') {
        setPromotions(response.data);
        return;
      }

      setProductList(response.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const retrieveProductsData = async (category: string) => {
    try {
      const storedData = await AsyncStorage.getItem('productsCategory/' + category);
      if (storedData !== null) {

        if (category === 'promotion') {
          setPromotions(JSON.parse(storedData));
          return;
        }

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
    retrieveProductsData('promotion');
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

        {promotions.map((product) => 
          <HighLightCard key={product.idproduto} 
            title={product.nome}
            amount={product.valor}
            urlImage={imagePaths[product.urlImage]}
            idproduto={product.idproduto}
            descricao={product.descricao}
          />
        )}
        
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