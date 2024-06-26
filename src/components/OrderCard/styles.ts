import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_header};
    border-radius: 5px;

    padding: 17px 24px;
    margin-top: 16px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

export const WrapperAmount = styled(RectButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Amount = styled.Text`

    font-size: ${RFValue(25)}px;

    color: ${({ theme }) => theme.colors.success};

    margin-top: 2px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 10px;
`;

export const Payment = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const PaymentType = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};

    margin-left: 10px;
`;

export const InfoDate = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
`;