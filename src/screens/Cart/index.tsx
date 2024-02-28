import React, { useEffect, useState } from "react";
import { Container,
  Content, 
  Header,
  TitleCart,
} from "./styles";
import { CartCard } from "../../components/CartCard";
import { ItemData } from "../../interface/ItemData";
import { PaymentCard } from "../../components/PaymentCard";
import { pedidoservice } from '../../services/pedidoService';
import { tokenService } from "../../services/tokenService";
import { TokenData } from "../../interface/tokenData";
import { ItemRequestDTO } from "../../interface/itemRequestDTO";
import { useSelector } from "react-redux";
import { IState } from "../../store/modules/cart/types";
import { useAppDispatch } from "../../store/modules/hooks";
import { clearCart } from "../../store/modules/cart/actions";

export const Cart: React.FC = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tokenData, setTokenData] = useState<TokenData>({} as TokenData);

  const itemList = useSelector<IState, ItemData[]>(state => state.cart.items);
  const dispatch = useAppDispatch();

  const handleSavePedido = async (paymentType: string) => {
    const newList: ItemRequestDTO[] = [];

    itemList.forEach((item) => {
      let newObject: ItemRequestDTO = {
        quantidade: item.quantidade,
        descricao: item.descricao,
        idproduto: item.idproduto,
      }
      newList.push(newObject);
    });

    const newOrder = pedidoservice.creationPedido(
      (subTotal + 5),
      tokenData.idUser,
      paymentType,
      newList
    )
    pedidoservice.save(newOrder);
    dispatch(clearCart());
  };

  useEffect(() => {
    let sub  = 0;
    
    itemList.forEach((item) => {
      sub = sub + item.total;
    });

    setSubTotal(sub);

  }, [itemList]);

  useEffect(() => {
    async function loadTokenData() {
      const data = await tokenService.retrieveTokenData();
      if (data){
        setTokenData(data);
      }
    }
    loadTokenData();
  }, []);

  return (
    <Container>

      <Header>
        <TitleCart>Confira os produtos do</TitleCart>
        <TitleCart>Carrinho</TitleCart>
      </Header>

      <Content>
        
        {itemList.map((item) =>
          <CartCard key={item.idproduto}
            item={item}
          />
        )}
        {itemList.length > 0 && (
          <PaymentCard 
            subTotal={subTotal}
            handleConfirm={handleSavePedido}
          />
        )}

      </Content>
      
    </Container>
  );
}