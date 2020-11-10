/* eslint-disable global-require */
import { createGlobalStyle } from 'styled-components';
import UbuntuRegularTTF from './ubuntu/Ubuntu-Regular.ttf';

export const UbuntuRegular = createGlobalStyle`
  @font-face {
    font-family: 'UbuntuRegular';
    src: url(${UbuntuRegularTTF});
  }
`;

export const UbuntuBold = createGlobalStyle`
  @font-face {
    font-family: 'UbuntuBold';
    src: url(${UbuntuRegularTTF});
  }
`;
