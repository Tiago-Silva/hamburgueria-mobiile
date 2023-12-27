import { useEffect, useRef, useState } from "react";

import { Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Card } from "../Card";
import { 
  Container, PromotionImage, WrapperImages 
} from "./styles";
import SwiperFlatList from "react-native-swiper-flatlist";

export const PromotionCard = () => {

  const data: {
    idproduto: number,
    nome: string,
    valor: number,
    status: boolean,
    urlImage: ImageSourcePropType,
  }[] = [
    {
      idproduto: 1,
      nome: '2 Miami',
      valor: 24.00,
      status: true,
      urlImage: require('../../../assets/chicago-promotion.jpeg')
    },
    {
      idproduto: 2,
      nome: '2 Chicago',
      valor: 30.00,
      status: true,
      urlImage: require('../../../assets/miami-promotion.jpeg')
    },
    {
      idproduto: 3,
      nome: '2 Flórida',
      valor: 40.00,
      status: true,
      urlImage: require('../../../assets/whaghiton-promotion.jpeg')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  return (
    <Container>
      <SwiperFlatList
      autoplay
      autoplayDelay={4}
      autoplayLoop
      index={0}
      showPagination={false}
      autoplayLoopKeepAnimation={true}
      data={data}
      renderItem={({ item, index }) => (
        <WrapperImages>
          <PromotionImage source={data[index].urlImage}/>
        </WrapperImages>
      )}
    />
    </Container>
  );
};