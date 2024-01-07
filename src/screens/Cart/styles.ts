import { Platform, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';


export const Container = styled.View`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: ${RFPercentage(100)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
  top: 0;

  background-color: ${({ theme }) => theme.colors.background_header};

  justify-content: center;
  align-items: center;
`;

export const TitleCart = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;

  font-size: ${RFValue(20)}px;
`;

// export const Content = styled.View`
//   /* flex: 1; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;



export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    /* position: absolute;
    margin-top: ${RFPercentage(13)}px; */
`;

export const Payment = styled.View`
  width: 300px;
  height: ${RFPercentage(25)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(20)}px;
  margin-left: ${RFValue(25)}px;
  margin-bottom: ${RFValue(25)}px;

  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.3;
      shadow-radius: 4px;
    `,
    android: `
      elevation: 4;
    `,
  })}
`;

export const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WrapperTitles = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleValues = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export const WrapperValues = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Values = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export const WrapperPaymenttype = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperIcons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TouchIcon = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const IconPayment = styled(MaterialIcons)`
  /* position: absolute; */
  color: ${({ theme }) => theme.colors.text};
`;

export const IconPix = styled(FontAwesome6)`
  /* position: absolute; */
  color: ${({ theme }) => theme.colors.text};
`;