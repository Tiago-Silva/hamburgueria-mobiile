import { Alert, ImageSourcePropType, ListRenderItemInfo } from "react-native";
import { Card } from "../../components/Card";
import { Category } from "../../components/Category";
import { Container, WrapperProductsList } from "./styles";
import { useEffect, useState } from "react";
import { userProdctData } from "../../hooks/useProductData";
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
      const response = await productService.getProductsByCategory(idEstabelecimento, category);
      setProductList(response.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  useEffect(() => {
    fetchProductData('snacks');
  }, [])

  const renderItem = ({ item }: ListRenderItemInfo<ProductData>) => {
    return (
      <Card 
        title={item.nome}
        amount={item.valor}
        urlImage={imagePaths[item.urlImage]}
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
        />
        <HighLightCard 
          title="2 Miami"
          amount={24.00}
          urlImage={require('../../../assets/snack.jpg')}
        />
        <HighLightCard 
          title="2 Miami"
          amount={24.00}
          urlImage={require('../../../assets/snack.jpg')}
        />
        
      </HighLightCards>

      <Category 
        handleCategorySelected={fetchProductData}
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