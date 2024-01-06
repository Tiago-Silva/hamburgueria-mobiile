import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  borderColor: string;
  backgroundColor: string;
}

export const Container = styled.TouchableOpacity<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid ${(props) => props.borderColor};
  background-color:${(props) => props.backgroundColor};
  padding: 5px 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }:any) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-weight: 700;
`;