import { Provider } from 'react-redux';
import store from '../store';
import {ThemeProvider} from "styled-components";
import theme from '../global/theme';
import {AuthProvider} from "../hooks/auth";


interface Props {
    children: React.ReactNode;
}

export const Providers = ({
    children
}: Props) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </Provider>
    );
};