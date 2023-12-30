import { Alert, ImageSourcePropType, ListRenderItemInfo } from "react-native";
import { Card } from "../../components/Card";
import { Category } from "../../components/Category";
import { PromotionCard } from "../../components/PromotionCard";
import { Container, WrapperProductsList } from "./styles";
import { useState } from "react";
import { userProdctData } from "../../hooks/useProductData";
import { ProductData } from "../../interface/ProductData";

const imagePaths: Record<string, ImageSourcePropType> = {
  Frame39: require("../../../assets/Frame39.png"),
};

export const Products = () => {

  const [idEstabelecimento, setIdEstabelecimento] = useState<number>(1);

  const { data: productList, refetch, isLoading, error, }  = userProdctData(
    idEstabelecimento
  );

  if (error) {
    console.log(error);
    return Alert.alert('Error:', error.message);
  }

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
      <PromotionCard />
      <Category />
      <WrapperProductsList 
        data={productList || []}
        keyExtractor={(item: ProductData) => item.idproduto}
        renderItem={renderItem}
        numColumns={2}
      />
      
    </Container>
  );
}