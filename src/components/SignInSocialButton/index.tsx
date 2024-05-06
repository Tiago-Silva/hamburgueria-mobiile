import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import {
  Button,
  ImageContainer,
  Text,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  svg: ReactNode
}

export const SignInSocialButton = ({
  title,
  svg,
  ...rest
}: Props) => {
  return(
    <Button {...rest}>
      <ImageContainer>
        {svg}
      </ImageContainer>

      <Text>
        {title}
      </Text>
    </Button>

  );
}