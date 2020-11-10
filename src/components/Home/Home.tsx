import {
  smallFontSize,
  standardFontWeight,
  strongFontWeight,
} from '@assets/css/Variables';
import peopleAndBooks from '@assets/png/people-and-books.png';
import { useAuth } from '@contexts/authContext';
import { useLateralMenu } from '@contexts/lateralMenuContext';
import { UbuntuBold, UbuntuRegular } from '@fonts/Fonts';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-family: 'UbuntuRegular';
  font-weight: ${standardFontWeight};
  font-size: ${smallFontSize};
`;

const StyledH12 = styled.h1`
  font-family: 'UbuntuBold';
  font-weight: ${strongFontWeight};
  font-size: ${smallFontSize};
`;

const Home: React.FC = () => {
  const { signed } = useAuth();

  const { isOpen, changeLateralMenuState } = useLateralMenu();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  function test() {
    changeLateralMenuState();
  }

  return (
    <div>
      <UbuntuRegular />
      <StyledH1>Books Notes</StyledH1>
      <UbuntuBold />
      <StyledH12>This is H2</StyledH12>
      <button type="button" onClick={test}>
        Teste
      </button>
      <img alt="people-and-book" src={peopleAndBooks} />
    </div>
  );
};

export default Home;
