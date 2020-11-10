import {
  smallFontSize,
  standardFontWeight,
  strongFontWeight,
} from '@assets/css/Variables';
import peopleAndBooks from '@assets/png/people-and-books.png';
import { useAuth } from '@contexts/authContext';
import { useLateralMenu } from '@contexts/lateralMenuContext';
import { UbuntuRegular } from '@fonts/Fonts';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import LateralMenu from '@shared/layouts/LateralMenu';

const StyledH1 = styled.h1`
  font-weight: ${standardFontWeight};
  font-size: ${smallFontSize};
`;

const StyledMainImg = styled.img`
  width: 100%;
`;

const Home: React.FC = () => {
  const { signed } = useAuth();

  const { isOpen, changeLateralMenuState } = useLateralMenu();

  function test() {
    changeLateralMenuState();
  }

  return (
    <div>
      <LateralMenu>Content INside Menu</LateralMenu>
      <UbuntuRegular />
      <StyledH1>Books Notes</StyledH1>
      <button type="button" onClick={test}>
        Teste
      </button>
      <StyledMainImg alt="people-and-book" src={peopleAndBooks} />
    </div>
  );
};

export default Home;
