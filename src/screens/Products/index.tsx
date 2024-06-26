import { ActivityIndicator, ListRenderItemInfo, RefreshControl } from "react-native";
import { Card } from "../../components/Card";
import { Category } from "../../components/Category";
import { Container, LoadContainer, WrapperProductsList } from "./styles";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductData } from "../../interface/ProductData";
import { Header } from "../../components/Header";
import { HighLightCards } from "../../components/HighLightCard/styles";
import { HighLightCard } from "../../components/HighLightCard";
import { productService } from "../../services/productService";
import { itemService } from "../../services/itemService";
import { useTheme } from "styled-components";
import { Loading } from "../../components/Loading";

// const imagePaths: Record<string, ImageSourcePropType> = {
//   Frame39: require("../../../assets/Frame39.png"),
//   Promotion: require("../../../assets/snack.jpg"),
//   Coca: require("../../../assets/coca-cola.png"),
//   Shake: require("../../../assets/Milk-shake.png"),
// };

export const Products = () => {

  const [idEstabelecimento, setIdEstabelecimento] = useState<number>(1);
  const [productList, setProductList] = useState<ProductData[]>([]);
  const [promotions, setPromotions] = useState<ProductData[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearcheCategory, setIsSearcheCategory] = useState(false);

  const theme = useTheme();

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
    } finally {
      setIsSearcheCategory(false);
    }
  };

  const retrieveProductsData = async (category: string) => {
    setIsSearcheCategory(true);
    try {
      const storedData = await AsyncStorage.getItem('productsCategory/' + category);
      if (storedData !== null) {

        if (category === 'promotion') {
          setPromotions(JSON.parse(storedData));
          return;
        }

        setProductList(JSON.parse(storedData));
        setIsSearcheCategory(false);
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
    setIsLoading(false);
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<ProductData>) => {
    return (
      <Card 
        title={item.nome}
        amount={item.valor}
        urlImage={item.urlImage}
        idproduto={item.idproduto}
        descricao={item.descricao}
      />
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setProductList([]);
    setPromotions([]);
    itemService.deleteListItem();
    productService.deleteProdutByCategoryToStorage('promotion');
    retrieveProductsData('snacks');
    retrieveProductsData('promotion');
    setRefreshing(false);
  };

  return (
    <Container>
      {
        isLoading ?
          <LoadContainer>
            <ActivityIndicator 
              color={theme.colors.text}
              size={"large"}
            />
          </LoadContainer>
          :
            <>
              <Header />

              {isSearcheCategory && <Loading />}

              <HighLightCards
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    // Cores para o indicador de carregamento (opcional)
                  />
                }
              >
              

                {promotions.map((product) => 
                  <HighLightCard key={product.idproduto} 
                    title={product.nome}
                    amount={product.valor}
                    urlImage={product.urlImage}
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
            </>
      }


    </Container>
  );
}